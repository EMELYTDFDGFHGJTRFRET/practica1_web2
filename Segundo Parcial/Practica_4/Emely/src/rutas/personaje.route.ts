import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET - Retrieve all personaje
router.get("/", async (req, res) => {
  try {
    const aspirantes = await prisma.personaje.findMany();
    res.json(aspirantes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los personajes" });
  }
});

// GET - Retrieve a Personaje by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const personaje = await prisma.personaje.findUnique({
      where: { id: Number(id) },
    });
    if (!personaje) {
      res.status(404).json({ error: "Personaje no encontrado" });
    } else {
      res.json(personaje);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el personaje" });
  }
});

// POST - Create a new Personaje
router.post("/", async (req, res) => {
  const { nombre, anosExperiencia } = req.body;
  try {
    const personajeCreado = await prisma.personaje.create({
      data: {
        nombre,
        anosExperiencia,
      },
    });
    res.status(201).json(personajeCreado);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el personaje" });
  }
});

// PUT - Update an existing Personaje by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, anosExperiencia } = req.body;
  try {
    const personajeActualizado = await prisma.personaje.update({
      where: { id: Number(id) },
      data: {
        nombre,
        anosExperiencia,
      },
    });
    res.json(personajeActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el personaje" });
  }
});

// DELETE - Delete a Personaje by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.personaje.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Personaje eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el personaje" });
  }
});

export default router;
