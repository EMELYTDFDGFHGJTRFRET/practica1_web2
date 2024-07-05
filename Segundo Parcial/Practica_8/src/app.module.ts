import { Module } from '@nestjs/common';
import { AsignacionModule } from './Asignacion/Asignacion.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AsignacionModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'openpg',
      database: 'practica8',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
