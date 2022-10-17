"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const posts_controller_1 = require("./posts/posts.controller");
const microservices_1 = require("@nestjs/microservices");
const posts_service_1 = require("./posts/posts.service");
let AppModule = (() => {
    let AppModule = class AppModule {
    };
    AppModule = __decorate([
        common_1.Module({
            imports: [microservices_1.ClientsModule.register([
                    {
                        name: 'POST',
                        transport: microservices_1.Transport.KAFKA,
                        options: {
                            client: {
                                clientId: 'post',
                                brokers: ['localhost:9092'],
                            },
                            consumer: {
                                groupId: 'post-consumer'
                            }
                        }
                    },
                    {
                        name: 'POST-SAVED',
                        transport: microservices_1.Transport.KAFKA,
                        options: {
                            client: {
                                clientId: 'post',
                                brokers: ['localhost:9092'],
                            },
                            consumer: {
                                groupId: 'posts-saved'
                            }
                        }
                    },
                ]),],
            controllers: [posts_controller_1.PostsController],
            providers: [posts_service_1.PostsService],
        })
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map