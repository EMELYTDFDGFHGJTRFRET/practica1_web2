import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { personajeService } from './personaje.service';
import { Personaje } from './entities/personaje.entity';
import { CreatePersonajeInput } from './dto/create-personaje.input';
import { UpdatePersonajeInput } from './dto/update-personaje.input';

@Resolver(() => Personaje)
export class personajeResolver {
  constructor(private readonly personajeService: personajeService) {}

  @Mutation(() => Personaje)
  async createPersonaje(@Args('createPersonajeInput') createPersonajeInput: CreatePersonajeInput): Promise<Personaje> {
    return this.personajeService.create(createPersonajeInput);
  }

  @Query(() => [Personaje], { name: 'personaje' })
  findAll(
    @Args('estado', { type: () => String,  nullable: true }) estado: string
  ) {
    return this.personajeService.findAll(estado);
  }

  @Query(() => Personaje, { name: 'personaje' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<Personaje> {
    return this.personajeService.findOne(id);
  }

  @Mutation(() => Personaje)
  updatePersonaje(@Args('updatePersonajeInput') updatePersonajeInput: UpdatePersonajeInput): Promise<Personaje> {
    return this.personajeService.update(updatePersonajeInput.id, updatePersonajeInput);
  }

  @Mutation(() => Personaje)
  removePersonaje(@Args('id', { type: () => Int }) id: number): Promise<Personaje> {
    return this.personajeService.remove(id);
  }
}
