import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonajeService } from './personaje.service';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/update-personaje.dto';

@Controller('personaje')
export class PersonajeController {
  constructor(private readonly personajeService: PersonajeService) {}

  @Post()
  create(@Body() createPersonajeDto: CreatePersonajeDto) {
    return this.personajeService.create(createPersonajeDto);
  }

  @Get()
  findAll() {
    return this.personajeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.personajeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePersonajeDto: UpdatePersonajeDto) {
    return this.personajeService.update(id, updatePersonajeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.personajeService.remove(id);
  }
}
