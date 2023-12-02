import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User_In_Group } from 'src/group/entities/userInGroup.entity';

@ObjectType()
export class User {
  @Field(() => Int)
  user_id: number;

  @Field(() => String)
  username: string;

  @Field(() => String)
  login: string;

  @Field(() => String)
  password: string;

  @Field(() => User_In_Group)
  groups?: User_In_Group[];
}
