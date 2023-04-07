import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './schemas/book.schema';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  @Query(() => [Book])
  async books(): Promise<Book[]> {
    return this.booksService.findAll();
  }
  @Mutation(() => Book)
  async createBook(
    @Args('createBookInput') createBookInput: CreateBookIn,
  ): Promise<Book> {
    return this.booksService.create(createBookInput);
  }
}
