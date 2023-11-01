import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dtos';
import { IsUser } from './user.interface';
import { User } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

    constructor (@InjectModel('User') private userModel: Model<User>){}

    async fetchUserByEmail(email: string){
        return this.userModel.findOne(email)
    }


}
