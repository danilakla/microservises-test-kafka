import { ClientKafka } from '@nestjs/microservices';
import { IPost } from "./interfaces/post.interface";
import { PostsService } from './posts.service';
export declare class PostsController {
    private clientlog;
    private clientsaved;
    private readonly postsService;
    constructor(clientlog: ClientKafka, clientsaved: ClientKafka, postsService: PostsService);
    onModuleInit(): Promise<void>;
    appPost(post: IPost): import("rxjs").Observable<any>;
    ever(post: IPost): any;
    getList(): import("rxjs").Observable<any>;
    test(): import("rxjs").Observable<any>;
}
