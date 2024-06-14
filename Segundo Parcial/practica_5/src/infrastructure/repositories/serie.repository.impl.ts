import {
    CreateSerieDto,
    SerieDatasource,
    SerieEntity,
    SerieRepository,
    UpdateSerieDto
  } from '../../domain';
  
  export class SerieRepositoryImpl implements SerieRepository {
  
    constructor(
      private readonly datasource: SerieDatasource,
    ) { }
  
    create(createSerieDto: CreateSerieDto): Promise<SerieEntity> {
      return this.datasource.create(createSerieDto);
    }
  
    getAll(): Promise<SerieEntity[]> {
      return this.datasource.getAll();
    }
  
    findById(id: number): Promise<SerieEntity> {
      return this.datasource.findById(id);
    }
  
    updateById(updateSerieDto: UpdateSerieDto): Promise<SerieEntity> {
      return this.datasource.updateById(updateSerieDto);
    }
  
    deleteById(id: number): Promise<SerieEntity> {
      return this.datasource.deleteById(id);
    }
  }
  