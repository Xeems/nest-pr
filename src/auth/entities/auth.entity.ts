import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Auth {
  
  @Field(() => String)
  Name: string;

  @Field(() => String)
  Login: string;

  @Field(() => String)
  Password: string;
}
