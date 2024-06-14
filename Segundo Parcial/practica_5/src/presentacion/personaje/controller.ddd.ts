import { Request, Response } from 'express';
import { PersonajeRepository } from '../../domain';
import { CreatePersonajeDto, UpdatePersonajeDto } from '../../domain/dtos';

export class PersonajeController {

  constructor(
    private readonly personajeRepository: PersonajeRepository,
  ) { }

  public getPersonaje = async (req: Request, res: Response) => {
    const personaje = await this.personajeRepository.getAll(); 
    return res.json(personaje);
  };

  public getPersonajeById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const personaje = await this.personajeRepository.findById(id); 
      res.json(personaje);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createPersonaje = async (req: Request, res: Response) => {
    const [error, createPersonajeDto] = CreatePersonajeDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const personaje = await this.personajeRepository.create(createPersonajeDto!); 
    res.json(personaje);
  };

  public updatePersonaje = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updatePersonajeDto] = UpdatePersonajeDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedPersonaje = await this.personajeRepository.updateById(updatePersonajeDto!); 
    return res.json(updatedPersonaje);
  };

  public deletePersonaje = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedPersonaje = await this.personajeRepository.deleteById(id); 
    res.json(deletedPersonaje);
  };
}
