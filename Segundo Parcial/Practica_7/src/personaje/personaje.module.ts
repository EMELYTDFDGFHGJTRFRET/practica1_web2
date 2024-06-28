import { Module } from '@nestjs/common';
import { personajeService } from './personaje.service';
import { personajeResolver } from './personaje.resolver';
import { Personaje } from './entities/personaje.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [personajeResolver, personajeService],
  imports: [TypeOrmModule.forFeature([Personaje])],
  exports: [TypeOrmModule]
})
export class PersonajeModule {}
