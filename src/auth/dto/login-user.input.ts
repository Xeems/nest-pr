import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class LoginUserInput {

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
