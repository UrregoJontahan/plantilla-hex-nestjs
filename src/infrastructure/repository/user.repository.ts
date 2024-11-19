import { Injectable } from "@nestjs/common";
import { User } from "src/domain/entities/user.entity";
import { UserInterfaceRepositoryPortOut } from "src/domain/ports/out/user.interface.repository.portOut";

@Injectable()
export class UserRepository implements UserInterfaceRepositoryPortOut {
    
    private users: User[] = [];

    async saveUser(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }
    
    async findById(id: number): Promise<User> {
        const user = this.users.find(user => user.getId() === id);
        return user;
    }
    
    async updateUser(id: number, updateUser:User): Promise<User> {
     const index = this.users.findIndex(user => user.getId() === id);

     if(index === -1){
        throw new Error("Usuario no encontrado")
     }

     this.users[index] = updateUser;
     return updateUser;

    }
    
    deleteUser(id: number) {
        const index = this.users.findIndex(user => user.getId() === id);

        if(index === -1){
           throw new Error("Usuario no encontrado")
        }

        this.users.splice(index, 1);
    }

}