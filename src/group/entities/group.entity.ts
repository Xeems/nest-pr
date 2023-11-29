import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Api } from 'src/api/entities/api.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Group {
  @Field(() => Int)
  group_id: number;

  @Field(() => String)
  group_name: string;

  @Field(() => User)
  users: User[];

  @Field(()=> Api)
  apis: Api[];
}
