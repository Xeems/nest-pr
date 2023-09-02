import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { User } from './entities/user.entity'
import { CreateUserInput } from './dto/create-user.input';

const prismaClient = new PrismaClient();

@Injectable()
export class UserService {

  async findByLogin(email: string) {
    const user = await prismaClient.users.findUnique({
      where: {
        email
      }
    });
    console.log(user)
    return user;
  }

  async createUser(input: CreateUserInput): Promise<User | undefined> {
    const user = await prismaClient.users.findFirst({
      where: {
        email: input.email
      }
    })

    if (user) {
      return undefined
    }

    const newUser = prismaClient.users.create({
      data: {
        email: input.email,
        password: input.password
      }
    });
    return newUser;
  }

}
