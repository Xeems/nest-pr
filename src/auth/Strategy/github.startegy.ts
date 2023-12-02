import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github2';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor() {
    super({
      clientID: process.env.GITHUB_CLIENTID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      callbackURL: 'http://localhost:3000/auth/github/callback',
      scope: ['public_profile']
    });
  }

  async validate(accessToken: string, _refreshToken: string, profile: any) {
    return profile;
  }

}