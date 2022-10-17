import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { IKafkaMessage } from '../../saved-post/src/interfaces/kafka-message.interface';
const dta: number[] = [];
let k = 0;
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @MessagePattern('pool.new.log')
  addPost(@Payload() message: IKafkaMessage<string>) {
    dta.push(k);
    k++;
    return dta;
  }
}
