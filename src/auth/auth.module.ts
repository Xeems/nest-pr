import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { GithubStrategy } from './Strategy/github.startegy';
import { PassportModule } from '@nestjs/passport';
import { GitHubGuard } from 'src/guards/github.guard';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthService, GitHubGuard, GithubStrategy ],
  imports:[UserModule,  PassportModule.register({ defaultStrategy: 'github' })],
  controllers: [AuthController]
})
export class AuthModule {}
