import { Injectable } from '@nestjs/common';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/update-personaje.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Personaje } from './entities/personaje.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonajeService {
  constructor(
    @InjectRepository(Personaje)
    private personajeRepository: Repository<Personaje>,
  ) {}


  async create(createPersonajeDto: CreatePersonajeDto) {
    const personaje = this.personajeRepository.create(createPersonajeDto); 
    return await this.personajeRepository.save(personaje);
  }

 async findAll() {
    return await this.personajeRepository.find({ where: { estado: 'activo' } });
  }

  async findOne(id: number) {
    return await this.personajeRepository.findOne({ where: { id, estado: 'activo' } });
  }

  async update(id: number, updatePersonajeDto: UpdatePersonajeDto) {
    const updated = await this.personajeRepository.update(id, updatePersonajeDto);
    return updated.affected > 0 ? await this.personajeRepository.findOne({ where: { id, estado: 'activo' } }) : null;
  }

  async remove(id: number) {
    const personaje = await this.personajeRepository.findOne({ where: {id} });
    if (personaje) {
      personaje.estado = 'inactivo';
      return this.personajeRepository.save(personaje);
    }
    return null;
  }
}
