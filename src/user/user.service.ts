import {ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) { }

	async newUser(github_id: string) {
		const user = await this.prisma.user.findFirst({
			where: {
				github_id
			},
		})

		if (user == null) {
			const newUser = this.prisma.user.create({
				data: {
					github_id,
					user_name: ''
				}
			})
			return newUser;
		}
		else return new ConflictException("User alredy exists")
	}

	async findOne(github_id: string) {
		const user = await this.prisma.user.findFirst({
			where: {
				github_id
			},
		})

		return user ? user : this.newUser(github_id)
	}
}
