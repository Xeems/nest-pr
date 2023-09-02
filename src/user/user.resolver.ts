import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';


@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  Register(@Args('createUserInput') input: CreateUserInput){
    return this.userService.createUser(input)
  }

  @Query(()=> String)
  root(){
    return null
  }
}
