import { Request, Response } from 'express';
import { SerieRepository } from '../../domain';
import { CreateSerieDto, UpdateSerieDto } from '../../domain/dtos';

export class SerieController {
  static getSerie(arg0: string, getSerie: any) {
      throw new Error('Method not implemented.');
  }

  constructor(
    private readonly serieRepository: SerieRepository,
  ) { }

  public getSerie = async (req: Request, res: Response) => {
    const series = await this.serieRepository.getAll();
    res.json(series);
  };
  
  public getSerieById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const serie = await this.serieRepository.findById(id);
      res.json(serie);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createSerie = async (req: Request, res: Response) => {
    const [error, createSerieDto] = CreateSerieDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const serie = await this.serieRepository.create(createSerieDto!); 
    res.json(serie);
  };

  public updateSerie = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateSerieDto] = UpdateSerieDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedSerie = await this.serieRepository.updateById(updateSerieDto!); 
    return res.json(updatedSerie);
  };

  public deleteSerie = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedSerie = await this.serieRepository.deleteById(id); 
    res.json(deletedSerie);
  };

  
}
