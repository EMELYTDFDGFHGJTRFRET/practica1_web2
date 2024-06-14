import { Router } from 'express';
import { AsignacionController } from './controller.ddd'; 
import { AsignacionDatasourceImpl } from "../../infrastructure/datasource/asignacion.datasource.impl"; 
import { AsignacionRepositoryImpl } from '../../infrastructure/repositories/asignacion.repository.impl';

export class AsignacionRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new AsignacionDatasourceImpl();
    const asignacionRepository = new AsignacionRepositoryImpl(datasource); 

   const asignacionController = new AsignacionController(asignacionRepository); 

    router.get('/', asignacionController.getAsignacion); 
    router.get('/:id', asignacionController.getAsignacionById); 

    router.post('/', asignacionController.createAsignacion); 
    router.put('/:id', asignacionController.updateAsignacion); 
    router.delete('/:id', asignacionController.deleteAsignacion); 

    return router;
  }
}
