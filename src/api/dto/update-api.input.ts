import { CreateApiInput } from './create-api.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateApiInput extends PartialType(CreateApiInput) {
  @Field(() => Int)
  id: number;
}
