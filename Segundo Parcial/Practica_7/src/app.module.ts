import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
//import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SerieModule } from './serie/serie.module';
import { PersonajeModule } from './personaje/personaje.module';
import { AsignacionModule } from './asignacion/asignacion.module';

@Module({
  imports: [
    
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [
        ApolloServerPluginLandingPageLocalDefault()
      ],

   
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT ,
      username: process.env.DB_USERNAME, 
      password: process.env.DB_PASSWORD ,
      database: process.env.DB_NAME ,
      synchronize: true,
      autoLoadEntities: true
    }),
    SerieModule,
    PersonajeModule,
    AsignacionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
