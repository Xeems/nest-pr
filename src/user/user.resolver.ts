import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserDto} from './dto/CreateUser.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('CreateUserInput') newUser: CreateUserDto) {
    return this.userService.newUser(newUser.login, newUser.username, newUser.password);
  }

  @Query(() => User)
  findUserByLogin(@Args('login', { type: () => String }) login: string) {
    return this.userService.findByLogin(login);
  }

}
