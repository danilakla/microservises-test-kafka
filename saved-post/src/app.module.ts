import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
imports:[ClientsModule.register([{
    name: 'POOL-CONSUMER',
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'post',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'pool-consumer'
      }
    }
  }]
)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
