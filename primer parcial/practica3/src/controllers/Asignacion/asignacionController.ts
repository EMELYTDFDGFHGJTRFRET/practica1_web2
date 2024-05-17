import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAsignaciones = async (req: Request, res: Response) => {
  try {
    const asignaciones = await prisma.asignacion.findMany({
      where: { estado: 'activo' },
      include: { serie: true, personaje: true },
    });
    res.json(asignaciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las asignaciones.' });
  }
};

export const createAsignacion = async (req: Request, res: Response) => {
  try {
    const { idSerie, idPersonaje, papel, tipoPapel, fechaInicio, fechaFin, temporadas } = req.body;
    const newAsignacion = await prisma.asignacion.create({
      data: { idSerie, idPersonaje, papel, tipoPapel, fechaInicio, fechaFin, temporadas },
    });
    res.json(newAsignacion);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la asignación.' });
  }
};

export const updateAsignacion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { idSerie, idPersonaje, papel, tipoPapel, fechaInicio, fechaFin, temporadas, estado } = req.body;
    const updatedAsignacion = await prisma.asignacion.update({
      where: { id: Number(id) },
      data: { idSerie, idPersonaje, papel, tipoPapel, fechaInicio, fechaFin, temporadas, estado },
    });
    res.json(updatedAsignacion);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la asignación.' });
  }
};

export const deleteAsignacion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.asignacion.deleteMany({ where: { id: Number(id) } });
    res.json({ message: 'Asignación eliminada correctamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la asignación.' });
  }
};
