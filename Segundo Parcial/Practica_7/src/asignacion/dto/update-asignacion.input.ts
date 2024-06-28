import { CreateAsignacionInput } from './create-asignacion.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAsignacionInput extends PartialType(CreateAsignacionInput) {
  @Field(() => Int)
  id: number;
}
