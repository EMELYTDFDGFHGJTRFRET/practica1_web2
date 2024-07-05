
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'asignaciones' })
export class AsignacionEntity {

  @PrimaryGeneratedColumn()

  id: number;

  @Column()
  idSerie: number;

  @Column()
  idPersonaje: number;

  @Column()

  papelQueInterpreta: string;

  @Column()

  tipoDePapel: string;

  @Column()

  fechaInicio: string;

  @Column()

  fechaFin: string;

  @Column()

  temporadas: number;

}