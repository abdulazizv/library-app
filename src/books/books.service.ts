import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private bookRepository: Model<BookDocument>,
  ) {}
  async create(createBookDto: CreateBookDto) {
    const newBook = await this.bookRepository.create(createBookDto);
    return newBook;
  }

  async findAll() {
    return await this.bookRepository.find().exec();
  }

  async findOne(id: string) {
    return this.bookRepository.findById(id);
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    const updatedBook = await this.bookRepository.findByIdAndUpdate(
      { _id: id },
      updateBookDto,
    );
    return updatedBook;
  }

  async remove(id: string) {
    return this.bookRepository.findByIdAndDelete(id);
  }
}
