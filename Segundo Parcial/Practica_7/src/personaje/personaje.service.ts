import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonajeInput } from './dto/create-personaje.input';
import { UpdatePersonajeInput } from './dto/update-personaje.input';
import { Personaje } from './entities/personaje.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class personajeService {
  constructor(
    @InjectRepository(Personaje)
    private readonly personajeRepository: Repository<Personaje>,
  ) { }

  async create(createPersonajeInput: CreatePersonajeInput): Promise<Personaje> {
    const newPersonaje = this.personajeRepository.create(createPersonajeInput);
    return await this.personajeRepository.save(newPersonaje);
  }

  async findAll(estado: string): Promise<Personaje[]> {
    if (estado === 'activo' || estado === 'inactivo') {
      return this.personajeRepository.find({ where: { estado } });
    }
    return await this.personajeRepository.find();
  }

  async findOne(id: number): Promise<Personaje> {
    const personaje = await this.personajeRepository.findOneBy({ id });
    if (!personaje) throw new NotFoundException('personaje not found');
    return personaje;
  }

  async update(id: number, updatePersonajeInput: UpdatePersonajeInput): Promise<Personaje> {
    const personaje = await this.personajeRepository.preload({
      id: id,
      ...updatePersonajeInput,
    });

    if (!personaje) throw new NotFoundException(`personaje with id: ${id} not found`);

    return this.personajeRepository.save(personaje);
  }

  async remove(id: number): Promise<Personaje> {
    const personaje = await this.personajeRepository.findOneBy({ id });
    if (personaje) {
      personaje.estado = 'inactivo';
      return this.personajeRepository.save(personaje);
    }
    return null;
  }
}
