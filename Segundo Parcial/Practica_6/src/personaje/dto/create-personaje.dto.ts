// create-personaje.dto.ts
import { IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreatePersonajeDto {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()

    @MinLength(3)
    nombre: string;

    
    @IsInt()
    @IsNotEmpty()
    anosExperiencia: number;
}
