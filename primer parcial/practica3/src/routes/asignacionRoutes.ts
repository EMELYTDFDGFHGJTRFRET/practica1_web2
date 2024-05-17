import { Router } from 'express';
import { getAsignaciones, createAsignacion, updateAsignacion, deleteAsignacion } from '../controllers/Asignacion/asignacionController';

const router = Router();

router.get('/', getAsignaciones);
router.post('/', createAsignacion);
router.put('/:id', updateAsignacion);
router.delete('/:id', deleteAsignacion);

export default router;
