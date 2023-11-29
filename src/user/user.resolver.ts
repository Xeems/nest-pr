import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('github_id', { type: () => String }) github_id: string) {
    return this.userService.newUser(github_id);
  }

  @Query(() => User)
  findOne(@Args('github_id', { type: () => String }) github_id: string) {
    return this.userService.findOne(github_id);
  }


}
