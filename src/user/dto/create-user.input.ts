import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  Login: string;

  @Field(() => String)
  Password: string;
}
