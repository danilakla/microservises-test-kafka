import { Module } from '@nestjs/common';
import { PostsController } from './posts/posts.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PostsService } from './posts/posts.service';

@Module({

  imports: [ ClientsModule.register([
    {
      name: 'POST',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'post',
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'post-consumer'
        }
      }
    },
    {
      name: 'POST-SAVED',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'post',
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'posts-saved'
        }
      }
    },
  ]),],
  controllers: [PostsController],
  providers: [PostsService],
})
export class AppModule {}
