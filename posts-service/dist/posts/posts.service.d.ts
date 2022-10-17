import { IPost } from "./interfaces/post.interface";
export declare class PostsService {
    posts: Array<IPost>;
    constructor();
    addPost(post: IPost): IPost;
    getList(): Array<IPost>;
}
