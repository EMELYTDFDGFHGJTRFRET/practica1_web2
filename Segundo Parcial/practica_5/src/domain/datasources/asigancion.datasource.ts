import { CreateAsignacionDto, UpdateAsignacionDto } from '../dtos';
import { AsignacionEntity } from '../entities/asignacion.entity';

export abstract class AsignacionDatasource {

  abstract create(createAsignacionDto: CreateAsignacionDto): Promise<AsignacionEntity>;
  abstract getAll(): Promise<AsignacionEntity[]>;
  abstract findById(id: number): Promise<AsignacionEntity>;
  abstract updateById(updateAsignacionDto: UpdateAsignacionDto): Promise<AsignacionEntity>;
  abstract deleteById(id: number): Promise<AsignacionEntity>;

}
