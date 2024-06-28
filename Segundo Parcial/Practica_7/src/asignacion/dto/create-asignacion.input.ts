import { InputType, Int, Field } from '@nestjs/graphql';

import { IsString, IsDateString, IsInt } from 'class-validator';

@InputType()
export class CreateAsignacionInput {

  @Field(() => Int, { nullable: true })
  @IsInt()
  id?: number;

  @Field(() => Int)
  @IsInt()
  idSerie: number;

  @Field(() => Int)
  @IsInt()
  idPersonaje: number;

  @Field(() => String)
  @IsString()
  papelQueInterpreta: string;

  @Field(() => String)
  @IsString()
  tipoDePapel: string;

  @Field(() => String)
  @IsDateString()
  fechaInicio: string;

  @Field(() => String)
  @IsDateString()
  fechaFin: string;

  @Field(() => Int)
  @IsInt()
  temporadas: number;

  @Field(() => String, { nullable: true })
  @IsString()
  estado?: string = 'activo';
}