import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAsignacionInput } from './dto/create-asignacion.input';
import { UpdateAsignacionInput } from './dto/update-asignacion.input';
import { Asignacion } from './entities/asignacion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AsignacionService {
  constructor(
    @InjectRepository(Asignacion)
    private readonly AsignacionRepository: Repository<Asignacion>,
  ) { }

  async create(createAsignacionInput: CreateAsignacionInput): Promise<Asignacion> {
    const newAsignacion = this.AsignacionRepository.create(createAsignacionInput);
    return await this.AsignacionRepository.save(newAsignacion);
  }

  async findAll(estado: string): Promise<Asignacion[]> {
    if (estado === 'activo' || estado === 'inactivo') {
      return this.AsignacionRepository.find({ where: { estado } });
    }
    return await this.AsignacionRepository.find();
  }

  async findOne(id: number): Promise<Asignacion> {
    const asignacion = await this.AsignacionRepository.findOneBy({ id });
    if (!asignacion) throw new NotFoundException('Asignacion not found');
    return asignacion;
  }

  async update(id: number, updateAsignacionInput: UpdateAsignacionInput): Promise<Asignacion> {
    const asignacion = await this.AsignacionRepository.preload({
      id: id,
      ...updateAsignacionInput,
    });

    if (!asignacion) throw new NotFoundException(`Asignacion with id: ${id} not found`);

    return this.AsignacionRepository.save(asignacion);
  }

  async remove(id: number): Promise<Asignacion> {
    const asignacion = await this.AsignacionRepository.findOneBy({ id });
    if (asignacion) {
      asignacion.estado = 'inactivo';
      return this.AsignacionRepository.save(asignacion);
    }
    return null;
  }
}
