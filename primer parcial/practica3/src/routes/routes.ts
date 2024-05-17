import { Router } from 'express';
import asignacionRoutes from './asignacionRoutes';
import personajeRoutes from './personajeRoutes';
import serieRoutes from './serieRoutes';

const router = Router();

router.use('/Serie', serieRoutes);
router.use('/Personaje',personajeRoutes );
router.use('/Asignacion',asignacionRoutes);

export default router;
