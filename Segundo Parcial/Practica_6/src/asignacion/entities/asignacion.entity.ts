import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Serie } from 'src/serie/entities/serie.entity';
import { Personaje } from 'src/personaje/entities/personaje.entity';

@Entity()
export class Asignacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  papelInterpreta: string;

  @Column('text')
  tipoPapel: string;

  @Column('date')
  fechaInicio: Date;

  @Column('date') 
  fechaFin: Date;

  @Column('int')
  temporadas: number;

  @ManyToOne(() => Serie, serie => serie.asignaciones)
  serie: Serie;

  @ManyToOne(() => Personaje, personaje => personaje.asignaciones)
  personaje: Personaje;

  estado: string;

}
