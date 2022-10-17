import { PostsService } from "./posts.service";
import { IKafkaMessage } from "../interfaces/kafka-message.interface";
import { IPost } from "./interfaces/post.interface";
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    getPosts(): IPost[];
    addPost(message: IKafkaMessage<IPost>): IPost;
}
