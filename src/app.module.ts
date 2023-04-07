import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { BooksResolver } from './books/books.resolver';

@Module({
  imports: [
    BooksModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://127.0.0.1/library_app'),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
    }),
  ],
  providers: [BooksResolver],
})
export class AppModule {}
