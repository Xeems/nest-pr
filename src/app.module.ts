import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { GroupModule } from './group/group.module';
import { ApiModule } from './api/api.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { GithubStrategy } from './auth/Strategy/github.startegy';


@Module({
  imports: [   
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UserModule,
    UserModule,
    GroupModule,
    ApiModule,
    AuthModule,
    PassportModule.register({ defaultStrategy: 'github' }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
  ],
  controllers: [],
  providers: [GithubStrategy],
})
export class AppModule { }
