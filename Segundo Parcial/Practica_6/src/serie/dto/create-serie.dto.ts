// create-serie.dto.ts
import { IsString, MinLength } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateSerieDto {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @MinLength(3)
    nombre: string;

    @IsString()
    clasificacion: string;
}
