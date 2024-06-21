import { Injectable } from '@nestjs/common';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Serie } from './entities/serie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SerieService {
  constructor(
    @InjectRepository(Serie)
    private serieRepository: Repository<Serie>,
  ) {}


  async create(createSerieDto: CreateSerieDto) {
    const serie = this.serieRepository.create(createSerieDto); 
    return await this.serieRepository.save(serie);
  }

  async findAll() {
    return await this.serieRepository.find({ where: { estado: 'activo' } });
  }

  async findOne(id: number) {
    return await this.serieRepository.findOne({ where: { id, estado: 'activo' } });
  }

  async update(id: number, updateSerieDto: UpdateSerieDto) {
    const updated = await this.serieRepository.update(id, updateSerieDto);
    return updated.affected > 0 ? await this.serieRepository.findOne({ where: { id, estado: 'activo' } }) : null
  }

  async remove(id: number) {
    const serie = await this.serieRepository.findOne({ where: {id} });
    if (serie) {
      serie.estado = 'inactivo';
      return this.serieRepository.save(serie);
    }
    return null;
  }
}
