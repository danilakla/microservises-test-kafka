import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class PostsService {

  constructor(  @Inject('POST') private clientlog: ClientKafka,

  ) {
  }
  async onModuleInit() {
    this.clientlog.subscribeToResponseOf('add.new.post');
    this.clientlog.subscribeToResponseOf('get.posts.list');
    await this.clientlog.connect();

  }
  getHello(): any {
    return this.clientlog.send('get.posts.list',{});
  }
}
