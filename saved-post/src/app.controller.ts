import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { IKafkaMessage } from './interfaces/kafka-message.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              @Inject('POOL-CONSUMER') private clientlog: ClientKafka,) {}


  async onModuleInit() {
    this.clientlog.subscribeToResponseOf('pool.new.log');
    await this.clientlog.connect();

  }
  @MessagePattern('test.new.log')
  addPost(@Payload() message: IKafkaMessage<string>) {

    return this.clientlog.send('pool.new.log',{});
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
