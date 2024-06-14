import { Router } from 'express';
import { SerieController } from './controller.ddd'; 
import { SerieDatasourceImpl } from "../../infrastructure/datasource/serie.datasource.impl"; 
import { SerieRepositoryImpl } from '../../infrastructure/repositories/serie.repository.impl'; 

export class SerieRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new SerieDatasourceImpl();
    const serieRepository = new SerieRepositoryImpl(datasource); 

    const serieController = new SerieController(serieRepository); 

    router.get('/', serieController.getSerie); // Renamed method
    router.get('/:id', serieController.getSerieById); // Renamed method
    router.post('/', serieController.createSerie); // Renamed method
    router.put('/:id', serieController.updateSerie); // Renamed method
    router.delete('/:id', serieController.deleteSerie); // Renamed method

    return router;
  }
}
