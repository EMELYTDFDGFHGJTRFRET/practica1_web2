
import { IsString, IsDateString, IsInt } from 'class-validator';

export class CreateAsignacionInput {


  @IsInt()
  id?: number;


  @IsInt()
  idSerie: number;

  @IsInt()
  idPersonaje: number;


  @IsString()
  papelQueInterpreta: string;


  @IsString()
  tipoDePapel: string;

  @IsDateString()
  fechaInicio: string;

  @IsDateString()
  fechaFin: string;


  @IsInt()
  temporadas: number;


}
