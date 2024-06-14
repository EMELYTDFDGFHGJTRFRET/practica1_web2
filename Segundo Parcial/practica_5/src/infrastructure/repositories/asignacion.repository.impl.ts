import {
    CreateAsignacionDto,
    AsignacionDatasource,
    AsignacionEntity,
    AsignacionRepository,
    UpdateAsignacionDto
  } from '../../domain';
  
  export class AsignacionRepositoryImpl implements AsignacionRepository {
  
    constructor(
      private readonly datasource: AsignacionDatasource,
    ) { }
  
    create(createAsignacionDto: CreateAsignacionDto): Promise<AsignacionEntity> {
      return this.datasource.create(createAsignacionDto);
    }
  
    getAll(): Promise<AsignacionEntity[]> {
      return this.datasource.getAll();
    }
  
    findById(id: number): Promise<AsignacionEntity> {
      return this.datasource.findById(id);
    }
  
    updateById(updateAsignacionDto: UpdateAsignacionDto): Promise<AsignacionEntity> {
      return this.datasource.updateById(updateAsignacionDto);
    }
  
    deleteById(id: number): Promise<AsignacionEntity> {
      return this.datasource.deleteById(id);
    }
  }
  