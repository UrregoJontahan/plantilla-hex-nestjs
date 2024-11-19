import { User } from "src/domain/entities/user.entity";

export interface UserInterfaceRepositoryPortOut{
    
    saveUser( user: User ): Promise<User>;
    findById(id: number): Promise<User>;
    updateUser(id: number, user:User): Promise<User>;
    deleteUser(id: number);
    
}