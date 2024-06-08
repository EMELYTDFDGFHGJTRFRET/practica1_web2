import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// GET - Retrieve all Asignaciones
router.get("/", async (req, res) => {
  try {
    const asignaciones = await prisma.asignacion.findMany();
    res.json(asignaciones);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las asignaciones" });
  }
});

// GET - Retrieve an Asignacion by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const asignacion = await prisma.asignacion.findUnique({
      where: { id: Number(id) },
      include: {
        serie: true,
        personaje: true,
      },
    });
    if (!asignacion) {
      res.status(404).json({ error: "Asignacion no encontrada" });
    } else {
      res.json(asignacion);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la asignacion" });
  }
});

// POST - Create a new Asignacion
router.post("/", async (req, res) => {
  const { id_serie, id_personaje, papel, tipo, fechaInicio, fechaFin, temporadas } = req.body;
  try {
    const asignacionCreada = await prisma.asignacion.create({
      data: {
        serieId: Number(id_serie),
        personajeId: Number(id_personaje),
        papel,
        tipo,
        fechaInicio,
        fechaFin,
        temporadas,
      },
    });
    res.status(201).json(asignacionCreada);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la asignacion" });
  }
});

// PUT - Update an existing Asignacion by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { id_serie, id_personaje, papel, tipo, fechaInicio, fechaFin, temporadas } = req.body;
  try {
    const asignacionActualizada = await prisma.asignacion.update({
      where: { id: Number(id) },
      data: {
        serieId: Number(id_serie),
        personajeId: Number(id_personaje),
        papel,
        tipo,
        fechaInicio,
        fechaFin,
        temporadas,
      },
    });
    res.json(asignacionActualizada);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la asignacion" });
  }
});

// DELETE - Delete an Asignacion by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.asignacion.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Asignacion eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la asignacion" });
  }
});

export default router;
