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
const posts_service_1 = require("./posts.service");
const microservices_1 = require("@nestjs/microservices");
let PostsController = (() => {
    let PostsController = class PostsController {
        constructor(postsService) {
            this.postsService = postsService;
        }
        getPosts() {
            return this.postsService.getList();
        }
        addPost(message) {
            return this.postsService.addPost(message.value);
        }
    };
    __decorate([
        microservices_1.MessagePattern('get.posts.list'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PostsController.prototype, "getPosts", null);
    __decorate([
        microservices_1.MessagePattern('add.new.post'),
        __param(0, microservices_1.Payload()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PostsController.prototype, "addPost", null);
    PostsController = __decorate([
        common_1.Controller(),
        __metadata("design:paramtypes", [posts_service_1.PostsService])
    ], PostsController);
    return PostsController;
})();
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map