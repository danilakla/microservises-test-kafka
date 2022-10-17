import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Client, ClientKafka, ClientProxy, Transport } from '@nestjs/microservices';
import {IPost} from "./interfaces/post.interface";
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    // @Client({
    //     transport: Transport.KAFKA,
    //     options: {
    //         client: {
    //             clientId: 'posts',
    //             brokers: ['localhost:9092'],
    //         },
    //         consumer: {
    //             groupId: 'posts-consumer'
    //         }
    //     }
    // })


    constructor(  @Inject('POST') private clientlog: ClientKafka,
                  @Inject('POST') private clientsaved: ClientKafka,
                  private readonly postsService:PostsService,
    ) {
    }

    async onModuleInit() {
        this.clientlog.subscribeToResponseOf('add.new.post');
        this.clientlog.subscribeToResponseOf('get.posts.list');
        this.clientsaved.subscribeToResponseOf('test.new.log');
        await this.clientlog.connect();
        await this.clientsaved.connect();

    }

    @Post('/')
    appPost(@Body() post: IPost) {
        console.log(post)
        return this.clientlog.send('add.new.post', post);
    }

    @Get('/ever')
    ever(@Body() post: IPost) {
        console.log(post)
        return this.postsService.getHello();
    }

    @Get('/')
    getList() {
        return this.clientlog.send('get.posts.list', '');
    }
    @Get('/t')
    test() {
        return this.clientsaved.send('test.new.log','');
    }
}
