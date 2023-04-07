import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field({ nullable: true })
  userId: string;
  @Field()
  title: string;
  @Field()
  author: string;
  @Field()
  publisher: string;
  @Field()
  isbn: string;
  @Field()
  coverImage: string;
}
