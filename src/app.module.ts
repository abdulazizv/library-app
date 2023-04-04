import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/library_app'),
    UsersModule,
    BooksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
