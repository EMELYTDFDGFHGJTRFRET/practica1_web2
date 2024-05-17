import { Router } from 'express';
import { getPersonajes, createPersonaje, updatePersonaje, deletePersonaje } from '../controllers/Personaje/personajeController';

const router = Router();

router.get('/', getPersonajes);
router.post('/', createPersonaje);
router.put('/:id', updatePersonaje);
router.delete('/:id', deletePersonaje);

export default router;
