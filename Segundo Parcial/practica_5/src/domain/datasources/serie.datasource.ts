import { CreateSerieDto, UpdateSerieDto } from '../dtos';
import { SerieEntity } from '../entities/serie.entity';

export abstract class SerieDatasource {

  abstract create(createSerieDto: CreateSerieDto): Promise<SerieEntity>;
  abstract getAll(): Promise<SerieEntity[]>;
  abstract findById(id: number): Promise<SerieEntity>;
  abstract updateById(updateSerieDto: UpdateSerieDto): Promise<SerieEntity>;
  abstract deleteById(id: number): Promise<SerieEntity>;

}
