import { InputType,ID, Field } from '@nestjs/graphql';

@InputType()
export class updateBookInput {
  @Field(() => ID)
  id: string;
  @Field({ nullable: true })
  title: string;
  @Field()
  author: string;
  @Field({ nullable: true })
  publisher: string;
  @Field()
  isbn: string;
  @Field()
  coverImage: string;
}
