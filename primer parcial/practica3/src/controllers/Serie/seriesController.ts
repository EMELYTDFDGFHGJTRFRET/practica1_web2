import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient

export const getSeries = async (req: Request, res: Response) => {
  try {
    const series = await prisma.serie.findMany({
      where: { estado: 'activo' },
    });
    res.json(series);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las series.' });
  }
};

export const createSerie = async (req: Request, res: Response) => {
  try {
    const { nombre, clasificacion } = req.body;
    const newSerie = await prisma.serie.create({
      data: { nombre, clasificacion },
    });
    res.json(newSerie);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la serie.' });
  }
};

export const updateSerie = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, clasificacion, estado } = req.body;
    const updatedSerie = await prisma.serie.update({
      where: { id: Number(id) },
      data: { nombre, clasificacion, estado },
    });
    res.json(updatedSerie);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la serie.' });
  }
};

export const deleteSerie = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedSerie = await prisma.serie.update({
      where: { id: Number(id) },
      data: { estado: 'eliminando' },
    });
    res.json(deletedSerie);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la serie.' });
  }
};