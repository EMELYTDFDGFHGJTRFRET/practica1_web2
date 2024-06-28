import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn,Entity, Column, OneToMany } from 'typeorm';
import { Asignacion } from 'src/asignacion/entities/asignacion.entity';
@ObjectType()
@Entity({ name: 'personaje' })
export class Personaje {

  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  Personaje: string;

  @Column()
  @Field(() => Int)
  aniosDeExperiencia: number;

  @Column({ default: 'activo' })
  @Field(() => String)
  estado: string;

  @OneToMany(
    () => Asignacion,
    (asignacion) => asignacion.personaje,
    { cascade: true }
  )
  @Field(() => [Asignacion], { nullable: true })
  asignaciones?: Asignacion[];
}