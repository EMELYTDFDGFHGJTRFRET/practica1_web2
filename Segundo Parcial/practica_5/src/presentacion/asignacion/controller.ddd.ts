import { Request, Response } from 'express';
import { AsignacionRepository } from '../../domain';
import { CreateAsignacionDto, UpdateAsignacionDto } from '../../domain/dtos';


export class AsignacionController {

  constructor(
    private readonly asignacionRepository:AsignacionRepository,
  ) { }

  public getAsignacion = async (req: Request, res: Response) => {
    const asignacions = await this.asignacionRepository.getAll(); 
    return res.json(asignacions);
  };

  public getAsignacionById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const asignacion = await this.asignacionRepository.findById(id); 
      res.json(asignacion);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createAsignacion = async (req: Request, res: Response) => {
    const [error, createAsignacionDto] = CreateAsignacionDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const asignacion = await this.asignacionRepository.create(createAsignacionDto!); 
    res.json(asignacion);
  };

  public updateAsignacion = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateAsignacionDto] = UpdateAsignacionDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedAsignacion = await this.asignacionRepository.updateById(updateAsignacionDto!); 
    return res.json(updatedAsignacion);
  };

  public deleteAsignacion = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedAsignacion = await this.asignacionRepository.deleteById(id); 
    res.json(deletedAsignacion);
  };
}
