import { User } from "src/domain/entities/user.entity";
import { UserDto } from "../dto/user.dto";

export class UserMapper {
   
    static toDto(user:User): UserDto{
        return {
            id: user.getId(),
            name: user.getName(),
            lastName: user.getLastName(),
            email: user.getEmail(),
            phone: user.getPhone(),
        }
    }
    
    static toEntity(userDto: UserDto): User{
        return new User(
            userDto.id,
            userDto.name,
            userDto.lastName,
            userDto.email,
            userDto.phone,
        )
    }
}