import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Group } from './group.entity';

@ObjectType()
export class User_In_Group {
    @Field(() => Int)
    user_in_group_id: number;

    @Field(() => User)
    user: User;

    @Field(() => Group)
    group: Group;

    @Field(() => String)
    role: Role;
}

export enum Role {
    CREATOR= "CREATOR",
    ADMIN = "ADMIN",
    MEMBER = "MEMBER"
}