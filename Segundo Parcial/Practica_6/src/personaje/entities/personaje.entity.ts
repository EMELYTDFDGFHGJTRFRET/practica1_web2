import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Asignacion } from 'src/asignacion/entities/asignacion.entity';

@Entity()
export class Personaje {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  nombre: string;

  @Column('int')
  anosExperiencia: number;
  
  @Column("text", { default: 'activo' })
  estado: string;


  @OneToMany(() => Asignacion, asignacion => asignacion.personaje)
  asignaciones: Asignacion[];
}
