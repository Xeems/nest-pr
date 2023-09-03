import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { User } from './entities/user.entity'
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {

  constructor(readonly prismaClient: PrismaService){}

  async findByLogin(email: string) {
    const user = await this.prismaClient.users.findUnique({
      where: {
        email
      }
    });
    console.log(user)
    return user;
  }

  async createUser(input: {email: string, password: string}): Promise<User>{
    const user = await this.prismaClient.users.findFirst({
      where: {
        email: input.email
      }
    })

    if (user) {
      return null
    }

    const newUser = await this.prismaClient.users.create({
      data: {
        email: input.email,
        password: input.password
      }
    });
    return newUser;
  }

}
