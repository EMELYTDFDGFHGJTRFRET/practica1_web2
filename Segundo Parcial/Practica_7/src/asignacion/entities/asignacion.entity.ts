import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Serie } from 'src/serie/entities/serie.entity';
import { Personaje } from 'src/personaje/entities/personaje.entity';

@ObjectType()
@Entity({ name: 'asignaciones' })
export class Asignacion {

  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => Int)
  idSerie: number;

  @Column()
  @Field(() => Int)
  idPersonaje: number;

  @Column()
  @Field(() => String)
  papelQueInterpreta: string;

  @Column()
  @Field(() => String)
  tipoDePapel: string;

  @Column('date')
  @Field(() => String)
  fechaInicio: string;

  @Column('date')
  @Field(() => String)
  fechaFin: string;

  @Column()
  @Field(() => Int)
  temporadas: number;

  @Column({ default: 'activo' })
  @Field(() => String)
  estado: string;

  @ManyToOne(
    () => Serie,
    (serie) => serie.asignaciones,
    { eager: true }
  )
  @Field(() => Serie)
  serie: Serie;

  @ManyToOne(
    () => Personaje,
    (personaje) => personaje.asignaciones,
    { eager: true }
  )
  @Field(() => Personaje)
  personaje: Personaje;
}