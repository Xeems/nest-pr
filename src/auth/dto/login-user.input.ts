import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class LoginUserInput {

  @Field(() => String)
  Login: string;

  @Field(() => String)
  Password: string;
}
