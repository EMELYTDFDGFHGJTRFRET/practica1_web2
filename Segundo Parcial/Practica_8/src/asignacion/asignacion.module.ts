import { Module } from '@nestjs/common';
import { AsignacionService } from './Asignacion.service';
import { AsignacionGateway } from './Asignacion.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignacionEntity } from './entity/entiti.asignacion';

@Module({
  providers: [AsignacionGateway, AsignacionService],
  imports: [TypeOrmModule.forFeature([AsignacionEntity])],
  exports: [TypeOrmModule]
})
export class AsignacionModule {}
