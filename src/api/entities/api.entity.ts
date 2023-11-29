import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Group } from 'src/group/entities/group.entity';

@ObjectType()
export class Api {
  @Field(() => Int)
  api_id: number;

  @Field(() => String)
  api_name: string;

  @Field(() => String)
  description: string;

  @Field(() => Group)
  group: Group;
}
