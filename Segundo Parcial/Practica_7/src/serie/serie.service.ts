import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSerieInput } from './dto/create-serie.input';
import { UpdateSerieInput } from './dto/update-serie.input';
import {Repository} from 'typeorm'
import { Serie } from './entities/serie.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SerieService {
  constructor(
    @InjectRepository(Serie)
    private readonly SerieRepository: Repository<Serie>,
  ) { }

  async create(createSerieInput: CreateSerieInput): Promise<Serie> {
    const newSerie = this.SerieRepository.create(createSerieInput);
    return await this.SerieRepository.save(newSerie);
  }

  async findAll(estado: string): Promise<Serie[]> {
    if (estado === 'activo' || estado === 'inactivo') {
      return this.SerieRepository.find({ where: { estado } });
    }
    return await this.SerieRepository.find();
  }

  async findOne(id: number): Promise<Serie> {
    const serie = await this.SerieRepository.findOneBy({ id });
    if (!serie) throw new NotFoundException('Serie not found');
    return serie;
  }

  async update(id: number, updateSerieInput: UpdateSerieInput): Promise<Serie> {
    const serie = await this.SerieRepository.preload({
      id: id,
      ...updateSerieInput,
    });

    if (!serie) throw new NotFoundException(`Serie with id: ${id} not found`);

    return this.SerieRepository.save(serie);
  }

  async remove(id: number): Promise<Serie> {
    const serie = await this.SerieRepository.findOneBy({ id });
    if (serie) {
      serie.estado = 'inactivo';
      return this.SerieRepository.save(serie);
    }
    return null;
  }
}
