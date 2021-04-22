import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {
    private usersRepository: Repository<User>

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository)
    }
    async create(email: string){
        const UsuarioExiste = await this.usersRepository.findOne({
            email
        })

        if (UsuarioExiste) {
            return UsuarioExiste
        }

        const user = this.usersRepository.create({
            email
        })
        await this.usersRepository.save(user)

        return user
    }

    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({ email });
      
        return user;
      }
}

export { UsersService }