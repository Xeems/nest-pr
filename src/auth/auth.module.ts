import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { GithubStrategy } from './Strategy/github.startegy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './Strategy/jwt.strategy';
import { LocalStrategy } from './Strategy/local.startegy';

@Module({
  providers: [AuthService, GithubStrategy, JwtStrategy, LocalStrategy],
  imports: [UserModule, PassportModule.register({ defaultStrategy: 'github' }),
    JwtModule.registerAsync({
      useFactory: async () => {
        return {
          signOptions: { expiresIn: '10h' },
          secret: process.env.JWT_SECRET,
        };
      },
    })],
  controllers: [AuthController]
})
export class AuthModule { }
