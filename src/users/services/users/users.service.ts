import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';
import { CreateUserParams } from 'src/utils/types';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userReposiitory: Repository<User>,
    ) {}

    findUsers() {
        return this.userReposiitory.find();
    }

    createUser(userDetails: CreateUserParams) {
        const newUser = this.userReposiitory.create({
        ...userDetails,
        createAt: new Date(),
        });
        return this.userReposiitory.save(newUser);
    }
}
