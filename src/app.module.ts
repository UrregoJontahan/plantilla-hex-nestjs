import { Module } from "@nestjs/common";
import { UserApplicationService } from "src/application/service/user.application.service";
import { UserRepository } from "src/infrastructure/repository/user.repository";
import { UserController } from "./infrastructure/controllers/user.controller";
import { UserServiceDomain } from "./domain/service/user.service";

@Module({
    controllers: [UserController],
    providers: [
        UserApplicationService,
        {
            provide: 'UserInterfacePortIn',
            useClass: UserServiceDomain,
        },
        {
            provide: 'UserInterfaceRepositoryPortOut',
            useClass: UserRepository,
        },
    ],
})
export class AppModule {}

