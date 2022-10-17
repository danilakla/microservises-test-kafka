import { AppService } from './app.service';
import { ClientKafka } from '@nestjs/microservices';
import { IKafkaMessage } from './interfaces/kafka-message.interface';
export declare class AppController {
    private readonly appService;
    private clientlog;
    constructor(appService: AppService, clientlog: ClientKafka);
    onModuleInit(): Promise<void>;
    addPost(message: IKafkaMessage<string>): import("rxjs").Observable<any>;
    getHello(): string;
}
