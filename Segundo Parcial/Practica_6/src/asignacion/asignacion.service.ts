import { Injectable } from '@nestjs/common';
import { CreateAsignacionDto } from './dto/create-asignacion.dto';
import { UpdateAsignacionDto } from './dto/update-asignacion.dto';
import { Asignacion } from './entities/asignacion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';



@Injectable()
export class AsignacionService {
  constructor(
    @InjectRepository(Asignacion)
    private asignacionRepository: Repository<Asignacion>,
  ) {}


  async create(createasignacionDto: CreateAsignacionDto) {
    const asignacion = this.asignacionRepository.create({
      ...CreateAsignacionDto,
      personaje: { id: CreateAsignacionDto.personajeId },
      serie: { id: createasignacionDto.serieId },
    }
    );
    await this.asignacionRepository.save(asignacion);
    return  asignacion;
  }

  async findAll() {
    return await this.asignacionRepository.find();
  }

  async findOne(id: number) {
    return await this.asignacionRepository.findOneBy({ id } );
  }

  async update(id: number, updateAsignacionDto: UpdateAsignacionDto) {
    const updated = await this.asignacionRepository.update(id, updateAsignacionDto);
    return updated.affected > 0 ? this.asignacionRepository.findOneBy({ id }) : null;
  }

  async remove(id: number) {
    const asignacion = await this.asignacionRepository.findOne({ where: { id } });
    if  (asignacion) {
      asignacion.estado = 'inactivo';
      return this.asignacionRepository.save(asignacion);
    }
    return null;
  }
}
