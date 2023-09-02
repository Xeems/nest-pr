import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {

  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByLogin(email);
    if (user && user.password === password) {
      const { password, ...rest } = user
      return rest
    }
    return new UnauthorizedException('validate user method');
  }

  async login(user: User) {
    return {
      acces_token: this.jwtService.sign({
        sub: user.id, 
        email: user.email
      }),
      user
    }
  }

}
