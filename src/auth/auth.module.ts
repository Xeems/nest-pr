import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { GqlAuthGuard } from './guard/gql-auth.guard';
import { JwtModule } from '@nestjs/jwt/dist';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtAuthGuard } from './guard/jwt-auth.guard';

@Module({
  imports:[
    UserModule, 
    PassportModule,
    JwtModule.register({
      signOptions:{expiresIn: '60s'},
      secret: process.env.JWT_SECRET
    })
  ],
  providers: [AuthResolver, AuthService, LocalStrategy, GqlAuthGuard, JwtAuthGuard, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
