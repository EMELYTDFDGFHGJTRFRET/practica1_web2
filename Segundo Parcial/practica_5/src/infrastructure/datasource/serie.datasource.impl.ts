import { prisma } from '../../data/postgres';
import { CreateSerieDto, SerieDatasource, SerieEntity, UpdateSerieDto } from '../../domain';

export class SerieDatasourceImpl implements SerieDatasource {

  async create(createSerieDto: CreateSerieDto): Promise<SerieEntity> {
    const serie = await prisma.serie.create({
      data: createSerieDto!
    });

    return SerieEntity.fromObject(serie);
  }

  async getAll(): Promise<SerieEntity[]> {
    const series = await prisma.serie.findMany();
    return series.map(serie => SerieEntity.fromObject(serie));
  }

  async findById(id: number): Promise<SerieEntity> {
    const serie = await prisma.serie.findFirst({
      where: { id }
    });

    if (!serie) throw `Serie with id ${id} not found`;
    return SerieEntity.fromObject(serie);
  }

  async updateById(updateSerieDto: UpdateSerieDto): Promise<SerieEntity> {
    await this.findById(updateSerieDto.id);

    const updatedSerie = await prisma.serie.update({
      where: { id: updateSerieDto.id },
      data: updateSerieDto!
    });

    return SerieEntity.fromObject(updatedSerie);
  }

  async deleteById(id: number): Promise<SerieEntity> {
    await this.findById(id);
    const deleted = await prisma.serie.delete({
      where: { id }
    });

    return SerieEntity.fromObject(deleted);
  }

}
