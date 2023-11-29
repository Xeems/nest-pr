import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async handleGithubCallback(req): Promise<any> {
    if (!req.user) {
      return 'No user from google'
    }

    return {
      message: 'User information from google',
      user: req.user
    }
  }
}
