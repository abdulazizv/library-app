import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  readonly title?: string;
  readonly author?: string;
  readonly publisher?: string;
  readonly isbn?: string;
  readonly coverImage?: string;
}
