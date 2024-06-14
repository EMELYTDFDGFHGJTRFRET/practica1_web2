import {
    CreatePersonajeDto,
    PersonajeDatasource,
    PersonajeEntity,
    PersonajeRepository,
    UpdatePersonajeDto
  } from '../../domain';
  
  export class PersonajeRepositoryImpl implements PersonajeRepository {
  
    constructor(
      private readonly datasource: PersonajeDatasource,
    ) { }
  
    create(createPersonajeDto: CreatePersonajeDto): Promise<PersonajeEntity> {
      return this.datasource.create(createPersonajeDto);
    }
  
    getAll(): Promise<PersonajeEntity[]> {
      return this.datasource.getAll();
    }
  
    findById(id: number): Promise<PersonajeEntity> {
      return this.datasource.findById(id);
    }
  
    updateById(updatePersonajeDto: UpdatePersonajeDto): Promise<PersonajeEntity> {
      return this.datasource.updateById(updatePersonajeDto);
    }
  
    deleteById(id: number): Promise<PersonajeEntity> {
      return this.datasource.deleteById(id);
    }
  }
  