import { User } from "src/domain/entities/user.entity";

export interface UserInterfacePortIn {
    
    createUser( user: User ): Promise<User>;
    getUser(id: number): Promise<User>;
    updateUser(id:number, user: User): Promise<User>;
    deleteUser(id: number): Promise<void>;
    
}