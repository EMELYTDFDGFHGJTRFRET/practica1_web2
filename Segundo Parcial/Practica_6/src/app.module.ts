import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AsignacionModule } from './asignacion/asignacion.module';
import { PersonajeModule } from './personaje/personaje.module';
import { SerieModule } from './serie/serie.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [AsignacionModule, PersonajeModule, SerieModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'openpg',
      database: 'practica_6',
      synchronize: true,
      autoLoadEntities:true
      
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule { }

