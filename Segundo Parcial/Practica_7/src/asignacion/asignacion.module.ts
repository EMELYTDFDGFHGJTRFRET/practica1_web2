import { Module } from '@nestjs/common';
import { AsignacionService} from './asignacion.service';
import { AsignacionResolver } from './asignacion.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asignacion } from './entities/asignacion.entity';

@Module({
  providers: [AsignacionResolver, AsignacionService],
  imports:[ TypeOrmModule.forFeature([Asignacion])],
  exports: [TypeOrmModule]
})
export class AsignacionModule {}
