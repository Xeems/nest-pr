import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login-user.input';
import { LoginResponse } from './dto/login-response';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guard/gql-auth.guard';
import { User } from 'src/user/entities/user.entity';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  login(
    @Args('loginUserInput') loginUserInput: LoginUserInput, @Context() context) {
    return this.authService.login(context.user);
  }

  @Mutation(() => User)
  signUp(@Args('signUpUserInput') loginUserInput: LoginUserInput){
    return this.authService.register(loginUserInput);
  }
}
