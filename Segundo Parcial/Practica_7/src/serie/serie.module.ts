import { Module } from '@nestjs/common';
import { SerieService } from './serie.service';
import { SerieResolver } from './serie.resolver';
import { Serie } from './entities/serie.entity';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  providers: [SerieResolver, SerieService],
  imports: [TypeOrmModule.forFeature([Serie])],
  exports: [TypeOrmModule]
})
export class SerieModule {}
