import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Asignacion } from 'src/asignacion/entities/asignacion.entity';

@Entity()
export class Serie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  nombre: string;

  @Column('text')
  clasificacion: string;
  
  @Column('text', { default: 'activo' })
  estado: string;


  @OneToMany(() => Asignacion, asignacion => asignacion.serie)
  asignaciones: Asignacion[];
}
