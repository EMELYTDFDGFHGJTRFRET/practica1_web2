import { Module } from '@nestjs/common';
import { PersonajeService } from './personaje.service';
import { PersonajeController } from './personaje.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personaje } from './entities/personaje.entity';

@Module({
  controllers: [PersonajeController],
  providers: [PersonajeService],

  imports: [TypeOrmModule.forFeature([Personaje])],
  exports: [TypeOrmModule]
})
export class PersonajeModule {}
