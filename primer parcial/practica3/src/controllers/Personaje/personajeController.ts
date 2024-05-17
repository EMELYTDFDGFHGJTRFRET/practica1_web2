import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getPersonajes = async (req: Request, res: Response) => {
  try {
    const personajes = await prisma.personaje.findMany({
      where: { estado: 'activo' },
    });
    res.json(personajes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los personajes.' });
  }
};

export const createPersonaje = async (req: Request, res: Response) => {
  try {
    const { nombre, anos_experiencia } = req.body;
    const newPersonaje = await prisma.personaje.create({
      data: { nombre, anos_experiencia },
    });
    res.json(newPersonaje);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el personaje.' });
  }
};

export const updatePersonaje = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, anos_experiencia, estado } = req.body;
    const updatedPersonaje = await prisma.personaje.update({
      where: { id: Number(id) },
      data: { nombre, anos_experiencia, estado },
    });
    res.json(updatedPersonaje);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el personaje.' });
  }
};

export const deletePersonaje = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedPersonaje = await prisma.personaje.update({
      where: { id: Number(id) },
      data: { estado: 'eliminando' },
    });
    res.json(deletedPersonaje);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el personaje.' });
  }
};
