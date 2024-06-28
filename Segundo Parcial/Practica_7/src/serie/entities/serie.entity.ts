import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Asignacion } from 'src/asignacion/entities/asignacion.entity';

@ObjectType()
@Entity({ name: 'series' })
export class Serie {

  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  Serie: string;

  @Column()
  @Field(() => String)
  clasificacion: string;

  @Column({ default: 'activo' })
  @Field(() => String)
  estado: string;

  @OneToMany(
    () => Asignacion,
    (asignacion) => asignacion.serie,
    { cascade: true }
  )
  @Field(() => [Asignacion], { nullable: true })
  asignaciones?: Asignacion[];
}

