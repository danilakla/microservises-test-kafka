import { AppService } from './app.service';
import { IKafkaMessage } from './saved-post/src/interfaces/kafka-message.interface';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    addPost(message: IKafkaMessage<string>): number[];
}
