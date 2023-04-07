import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './schemas/book.schema';
import { CreateBookInput } from './dto/createBook.input';
import { updateBookInput } from "./dto/updateBook.input";
import { User } from "../users/schemas/user.schema";

@Resolver(() => Book)
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  @Mutation(() => [Book])
  @Query(() => [Book])
  async books(): Promise<Book[]> {
    return this.booksService.findAll();
  }
  @Mutation(() => Book)
  async createBook(
    @Args('createBookInput') createBookInput: CreateBookInput,
  ): Promise<Book> {
    return this.booksService.create(createBookInput);
  }

  @Mutation(() => Book)
  async updateBook(
    @Args('updateBookInput') updateBookInput: updateBookInput
  ) {
    return this.booksService.updateUser(updateBookInput);
  }
}
