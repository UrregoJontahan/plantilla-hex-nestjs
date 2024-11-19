import { Inject, Injectable } from "@nestjs/common";
import { UserDto } from "../dto/user.dto";
import { UserInterfacePortIn } from "src/domain/ports/in/user.interface.portIn";
import { UserMapper } from "../mapper/user.mapper";

@Injectable()
export class UserApplicationService {
    constructor(@Inject('UserInterfacePortIn') private readonly userInterfacePortIn: UserInterfacePortIn){}

    async createUser(userDto: UserDto): Promise <UserDto> {
        const user = UserMapper.toEntity(userDto);       // convierte un UserDto que recive a entidad.
        const createUser = await this.userInterfacePortIn.createUser(user) // llama al puerto de entrada.

        return UserMapper.toDto(createUser); // convierte la entidad de vuelta a dto.
    }

    async getUser(id: number): Promise<UserDto>{
        const user = await this.userInterfacePortIn.getUser(id);
        
        return UserMapper.toDto(user);
    }
    
    async updateUser(id:number, userDto: UserDto): Promise<UserDto>{
        const user = UserMapper.toEntity(userDto);
        const updateUser = await this.userInterfacePortIn.updateUser(id, user);

        return UserMapper.toDto(updateUser);
    }
    
    async deleteUser(id: number): Promise<void>{
        await this.userInterfacePortIn.deleteUser(id);
    }

}