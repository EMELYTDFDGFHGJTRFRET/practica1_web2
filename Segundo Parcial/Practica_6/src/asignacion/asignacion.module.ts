import { Module } from '@nestjs/common';
import { AsignacionService } from './asignacion.service';
import { AsignacionController } from './asignacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asignacion } from './entities/asignacion.entity';
@Module({
  controllers: [AsignacionController],
  providers: [AsignacionService],
  
  imports: [TypeOrmModule.forFeature([Asignacion])],
  exports: [TypeOrmModule]
})
export class AsignacionModule {}
