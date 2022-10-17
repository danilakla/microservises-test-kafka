"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const posts_service_1 = require("./posts.service");
let PostsController = (() => {
    let PostsController = class PostsController {
        constructor(clientlog, clientsaved, postsService) {
            this.clientlog = clientlog;
            this.clientsaved = clientsaved;
            this.postsService = postsService;
        }
        async onModuleInit() {
            this.clientlog.subscribeToResponseOf('add.new.post');
            this.clientlog.subscribeToResponseOf('get.posts.list');
            this.clientsaved.subscribeToResponseOf('test.new.log');
            await this.clientlog.connect();
            await this.clientsaved.connect();
        }
        appPost(post) {
            console.log(post);
            return this.clientlog.send('add.new.post', post);
        }
        ever(post) {
            console.log(post);
            return this.postsService.getHello();
        }
        getList() {
            return this.clientlog.send('get.posts.list', '');
        }
        test() {
            return this.clientsaved.send('test.new.log', '');
        }
    };
    __decorate([
        common_1.Post('/'),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PostsController.prototype, "appPost", null);
    __decorate([
        common_1.Get('/ever'),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PostsController.prototype, "ever", null);
    __decorate([
        common_1.Get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PostsController.prototype, "getList", null);
    __decorate([
        common_1.Get('/t'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PostsController.prototype, "test", null);
    PostsController = __decorate([
        common_1.Controller('posts'),
        __param(0, common_1.Inject('POST')),
        __param(1, common_1.Inject('POST')),
        __metadata("design:paramtypes", [microservices_1.ClientKafka,
            microservices_1.ClientKafka,
            posts_service_1.PostsService])
    ], PostsController);
    return PostsController;
})();
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map