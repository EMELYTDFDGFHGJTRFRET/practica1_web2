import express from 'express';
import cors from 'cors';
import { asignacion,personaje,serie,conexion } from './rutas/index';
const app = express();

// Habilita CORS
app.use(cors());
app.use(express.json());

// Configura las rutas
app.use('/asignaciones', asignacion);
app.use('/series', serie);
app.use('/personajes', personaje);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});