import { CreateSerieInput } from './create-serie.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSerieInput extends PartialType(CreateSerieInput) {
  @Field(() => Int)
  id: number;
}
