import { ClientKafka } from '@nestjs/microservices';
export declare class PostsService {
    private clientlog;
    constructor(clientlog: ClientKafka);
    onModuleInit(): Promise<void>;
    getHello(): any;
}
