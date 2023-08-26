import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { LoginUserInput } from './dto/login-user.input';
import { LoginResponse } from './dto/login-response';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guard/gql-auth.guard';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  Login(@Args('LoginUserInput') loginUserInput: LoginUserInput, @Context() context) {
    return this.authService.login(context.user);
  }
}
