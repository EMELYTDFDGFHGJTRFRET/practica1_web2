import { Router } from 'express';
import { getSeries, createSerie, updateSerie, deleteSerie } from '../controllers/Serie/seriesController';

const router = Router();

router.get('/', getSeries);
router.post('/', createSerie);
router.put('/:id', updateSerie);
router.delete('/:id', deleteSerie);

export default router;
