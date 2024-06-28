import { InputType, Int, Field} from '@nestjs/graphql';
import { IsString, IsOptional, IsInt } from 'class-validator';

@InputType()
export class CreateSerieInput {
  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  id?: number;

  @Field(() => String)
  @IsString()
  Serie: string;

  @Field(() => String)
  @IsString()
  clasificacion: string;
  
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  estado?: string = 'activo';
}
