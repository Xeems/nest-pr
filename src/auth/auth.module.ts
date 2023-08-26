import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { GqlAuthGuard } from './guard/gql-auth.guard';

@Module({
  imports:[UserModule, PassportModule],
  providers: [AuthResolver, AuthService, LocalStrategy, GqlAuthGuard],
})
export class AuthModule {}
