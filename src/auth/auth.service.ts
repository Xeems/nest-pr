import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {

  constructor(private userService: UserService) { }

  async validateUser(login: string, password: string): Promise<any> {
    const user = await this.userService.findByLogin(login);
    if (user && user.password == password) {
      const { password, ...rest } = user
      return rest
    }
  }

  async login(user: User) {
    return {
      acces_token: 'IsJWT',
      user: user
    }
  }

}
