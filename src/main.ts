import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApolloServer } from '@apollo/server';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(cors({
  //   origin: 'http://localhost:8000',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   credentials: true,
  // }))

  app.enableCors({
    allowedHeaders:['content-type'],
    origin: 'http://localhost:8000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
