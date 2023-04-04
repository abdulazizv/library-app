import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userRepository: Model<UserDocument>,
  ) {}

  async findByEmail(email: string): Promise<User | false> {
    return this.userRepository.findOne({ email }).exec();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userRepository.create({
      email: email,
      password: hashedPassword,
    });
    return user;
  }

  async authenticate(createUserDto: CreateUserDto): Promise<string | null> {
    const { email, password } = createUserDto;
    const user = await this.findByEmail(email);
    if (!user) {
      return null;
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return null;
    }
    const payload = { email };
    return await jwt.sign(payload, 'MySecretKey', { expiresIn: '1h' });
  }
  async findAll(): Promise<User[]> {
    return await this.userRepository.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return true;
  }

  async remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
