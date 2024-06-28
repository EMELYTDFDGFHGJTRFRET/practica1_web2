import { InputType, Int, Field } from '@nestjs/graphql';
import {IsOptional, IsInt, IsString} from 'class-validator'
@InputType()
export class CreatePersonajeInput {

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  id?: number;

  @Field(() => String)
  @IsString()
  Personaje: string;

  @Field(() => Int)
  @IsInt()
  aniosDeExperiencia: number;
  
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  estado?: string = 'activo';
}