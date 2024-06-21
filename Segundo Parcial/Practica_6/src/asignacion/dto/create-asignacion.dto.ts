// create-asignacion.dto.ts
import { IsBoolean,IsDateString,IsInt, IsNotEmpty, IsString,IsOptional } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateAsignacionDto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsInt()
  @IsNotEmpty()
  serieId : number;

  @IsInt()
  @IsNotEmpty()
  personajeId: number;

  @IsString()
  @IsNotEmpty()
  papelInterpreta: string;

  @IsString()
  tipoPapel: string;

  @IsDateString()
  fechaInicio: Date;

  @IsDateString()
  fechaFin: Date;
  
  @IsInt()
  @IsNotEmpty()
  temporadas: number;

  @IsBoolean()
  @IsOptional() 
  asignacion: boolean= false;
  @IsString()
  estado: string="activo";  
  static personajeId: number;

}
