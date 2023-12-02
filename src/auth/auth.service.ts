import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AuthService {
	constructor(private userService: UserService,
		private jwtService: JwtService) { }

	async handleGithubCallback(req): Promise<any> {
		if (!req.user) {
			return 'No user from google'
		}

		const user = req.user;
		const payload = { sub: user.id, username: user.username };
		return { accessToken: this.jwtService.sign(payload) };
	}

	async validateUser(login: string, password: string) {
		const user = await this.userService.findByLogin(login)
		if (user.password === password) {
			const { password, ...result } = user;
			return result;
		}
		else new Error("user unothorized")

	}

	async login(user: any) {
		const payload = { login: user.login, sub: user.userId };
		return {
			access_token: this.jwtService.sign(payload),
		};
	}
}
