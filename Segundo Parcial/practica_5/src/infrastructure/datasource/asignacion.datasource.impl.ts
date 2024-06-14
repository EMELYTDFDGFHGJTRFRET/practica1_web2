import { prisma } from '../../data/postgres';
import { CreateAsignacionDto, AsignacionDatasource, AsignacionEntity, UpdateAsignacionDto } from '../../domain';

export class AsignacionDatasourceImpl implements AsignacionDatasource {

  async create(createAsignacionDto: CreateAsignacionDto): Promise<AsignacionEntity> {
    const asignacion = await prisma.asignacion.create({
      data: createAsignacionDto!
    });

    return AsignacionEntity.fromObject(asignacion);
  }

  async getAll(): Promise<AsignacionEntity[]> {
    const asignaciones = await prisma.asignacion.findMany();
    return asignaciones.map(asignacion => AsignacionEntity.fromObject(asignacion));
  }

  async findById(id: number): Promise<AsignacionEntity> {
    const asignacion = await prisma.asignacion.findFirst({
      where: { id }
    });

    if (!asignacion) throw `Asignacion with id ${id} not found`;
    return AsignacionEntity.fromObject(asignacion);
  }

  async updateById(updateAsignacionDto: UpdateAsignacionDto): Promise<AsignacionEntity> {
    await this.findById(updateAsignacionDto.id);

    const updatedAsignacion = await prisma.asignacion.update({
      where: { id: updateAsignacionDto.id },
      data: updateAsignacionDto!
    });

    return AsignacionEntity.fromObject(updatedAsignacion);
  }

  async deleteById(id: number): Promise<AsignacionEntity> {
    await this.findById(id);
    const deleted = await prisma.asignacion.delete({
      where: { id }
    });

    return AsignacionEntity.fromObject(deleted);
  }

}
