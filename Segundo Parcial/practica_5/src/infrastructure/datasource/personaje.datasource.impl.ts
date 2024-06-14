import { prisma } from '../../data/postgres';
import { CreatePersonajeDto, PersonajeDatasource, PersonajeEntity, UpdatePersonajeDto } from '../../domain';

export class PersonajeDatasourceImpl implements PersonajeDatasource {

  async create(createPersonajeDto: CreatePersonajeDto): Promise<PersonajeEntity> {
    const personaje = await prisma.personaje.create({
      data: createPersonajeDto!
    });

    return PersonajeEntity.fromObject(personaje);
  }

  async getAll(): Promise<PersonajeEntity[]> {
    const personajes = await prisma.personaje.findMany();
    return personajes.map(personaje => PersonajeEntity.fromObject(personaje));
  }

  async findById(id: number): Promise<PersonajeEntity> {
    const personaje = await prisma.personaje.findFirst({
      where: { id }
    });

    if (!personaje) throw `Personaje with id ${id} not found`;
    return PersonajeEntity.fromObject(personaje);
  }

  async updateById(updatePersonajeDto: UpdatePersonajeDto): Promise<PersonajeEntity> {
    await this.findById(updatePersonajeDto.id);

    const updatedPersonaje = await prisma.personaje.update({
      where: { id: updatePersonajeDto.id },
      data: updatePersonajeDto!
    });

    return PersonajeEntity.fromObject(updatedPersonaje);
  }

  async deleteById(id: number): Promise<PersonajeEntity> {
    await this.findById(id);
    const deleted = await prisma.personaje.delete({
      where: { id }
    });

    return PersonajeEntity.fromObject(deleted);
  }

}
