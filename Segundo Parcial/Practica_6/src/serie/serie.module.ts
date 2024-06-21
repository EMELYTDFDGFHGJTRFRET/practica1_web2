import { Module } from '@nestjs/common';
import { SerieService } from './serie.service';
import { SerieController } from './serie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Serie } from './entities/serie.entity';

@Module({
  controllers: [SerieController],
  providers: [SerieService],

  imports:[TypeOrmModule.forFeature([Serie])],
  exports:[TypeOrmModule],
})
export class SerieModule {}
