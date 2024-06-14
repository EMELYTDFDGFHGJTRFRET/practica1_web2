import { Router } from 'express';
import { PersonajeController } from './controller.ddd'; 
import { PersonajeDatasourceImpl } from "../../infrastructure/datasource/personaje.datasource.impl"; 
import { PersonajeRepositoryImpl } from '../../infrastructure/repositories/personaje.repository.impl'; 

export class PersonajeRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new PersonajeDatasourceImpl(); 
    const personajeRepository = new PersonajeRepositoryImpl(datasource); 

    const personajeController = new PersonajeController(personajeRepository); 

    router.get('/', personajeController.getPersonaje); 
    router.get('/:id', personajeController.getPersonaje); 

    router.post('/', personajeController.createPersonaje);
    router.put('/:id', personajeController.updatePersonaje); 
    router.delete('/:id', personajeController.deletePersonaje); 

    return router;
  }
}