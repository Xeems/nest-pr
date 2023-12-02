import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) { }

	async newUser(username: string, login: string, password: string): Promise<User> {
		try {
			const user = await this.findByLogin(login)
			if (!user) {
				const newUser = await this.prisma.user.create({
					data: {
						login: login,
						username: username,
						password: password
					}
				})
				return newUser
			}
		}
		catch (error) {
			console.log(error)
		}
	}

	async findByLogin(login: string): Promise<User> {
		try {
			const user = await this.prisma.user.findFirst({
				where: {
					login
				}
			})
			return user
		}
		catch (error) {
			console.log(error)
		}
	}
}
