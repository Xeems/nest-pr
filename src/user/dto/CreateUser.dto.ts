import {Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {

  @Field(() => String)
  login: string;

  @Field(() => String)
  username: string;

  @Field(()=> String)
  password: string;
}