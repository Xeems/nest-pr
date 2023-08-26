import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { User } from './entities/user.entity'

const prismaClient = new PrismaClient();

@Injectable()
export class UserService {

  async findByLogin(login: string){
    const user = await prismaClient.users.findFirst({
      where: {
        login: login
      }
    });

    return user;
  }

}
