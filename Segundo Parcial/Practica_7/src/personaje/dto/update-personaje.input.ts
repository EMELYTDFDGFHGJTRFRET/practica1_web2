import { CreatePersonajeInput } from './create-personaje.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePersonajeInput extends PartialType(CreatePersonajeInput) {
  @Field(() => Int)
  id: number;
}
