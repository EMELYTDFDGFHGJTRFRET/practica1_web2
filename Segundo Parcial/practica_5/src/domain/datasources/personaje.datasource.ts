import { CreatePersonajeDto, UpdatePersonajeDto } from '../dtos';
import { PersonajeEntity } from '../entities/personaje.entity';

export abstract class PersonajeDatasource {

  abstract create(createPersonajeDto: CreatePersonajeDto): Promise<PersonajeEntity>;
  abstract getAll(): Promise<PersonajeEntity[]>;
  abstract findById(id: number): Promise<PersonajeEntity>;
  abstract updateById(updatePersonajeDto: UpdatePersonajeDto): Promise<PersonajeEntity>;
  abstract deleteById(id: number): Promise<PersonajeEntity>;

}
