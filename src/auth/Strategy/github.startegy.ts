import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github2';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor() {
    super({
      clientID: process.env.GITHUB_CLIENTID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      callbackURL: 'http://localhost:4000/auth/callback',
      scope: ['public_profile']
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any): Promise<any> {
    const { username, id, displayName, emails } = profile;
    return {
      githubId: id,
      username,
      displayName,
      email: emails ? emails[0].value : null,
      accessToken,
    }
  }

}