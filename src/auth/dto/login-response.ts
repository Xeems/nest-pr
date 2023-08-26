import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class LoginResponse{
    @Field()
    acces_token: string;

    @Field(()=> User)
    user: User
}