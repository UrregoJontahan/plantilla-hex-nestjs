import { Inject, Injectable } from "@nestjs/common";
import { User } from "../entities/user.entity";
import { UserInterfacePortIn } from "../ports/in/user.interface.portIn";
import { UserInterfaceRepositoryPortOut } from "../ports/out/user.interface.repository.portOut";

@Injectable()
export class UserServiceDomain implements UserInterfacePortIn {
    constructor( @Inject('UserInterfaceRepositoryPortOut') private readonly userRepositoryPortOut: UserInterfaceRepositoryPortOut ){}

    async createUser(user: User): Promise<User> {
        return await this.userRepositoryPortOut.saveUser(user);
    }

    async getUser(id: number): Promise<User> {
        const user = await this.userRepositoryPortOut.findById(id);
        if(!user){
            throw new Error("Usuario no encontrado");
        } 
        return user;
    }

    async updateUser(id: number, user: User): Promise<User> {
        
        const existingUser = await this.userRepositoryPortOut.findById(id);
        if(!existingUser) throw new Error ("Usuario no encontrado")
        return await this.userRepositoryPortOut.updateUser(id, user);
    }

    async deleteUser(id: number): Promise<void> {
        const existingUser = await this.userRepositoryPortOut.findById(id);
        if(!existingUser) throw new Error ("Usuario no encontrado");

        return await this.userRepositoryPortOut.deleteUser(id);
    }
}