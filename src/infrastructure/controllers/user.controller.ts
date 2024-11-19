import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserDto } from "src/application/dto/user.dto";
import { UserApplicationService } from "src/application/service/user.application.service";

@Controller("users")
export class UserController {
    constructor( private readonly userApplicationService: UserApplicationService ){};

    @Post()
    async createUser(@Body() userDto: UserDto): Promise<UserDto>{
        return this.userApplicationService.createUser(userDto);
    } 

    @Get(":id")
    async getUser(@Param("id") id: number): Promise<UserDto>{
        return this.userApplicationService.getUser(Number(id)); //Se ponen Number para que el string id que se recibe pase a ser numero.
    }

    @Put(":id")
    async updateUser(@Param("id") id: number, @Body() userDto: UserDto): Promise<UserDto>{
        return this.userApplicationService.updateUser(Number(id), userDto);
    }

    @Delete(":id")
    async deleteUser(@Param("id") id: number): Promise<void>{
         this.userApplicationService.deleteUser(Number(id));
    }
}