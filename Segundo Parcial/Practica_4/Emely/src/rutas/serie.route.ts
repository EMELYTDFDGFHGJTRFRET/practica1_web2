import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET - Retrieve all Series
router.get("/", async (req, res) => {
  try {
    const series = await prisma.serie.findMany();
    res.json(series);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las series" });
  }
});

// GET - Retrieve a Serie by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const serie = await prisma.serie.findUnique({
      where: { id: Number(id) },
    });
    if (!serie) {
      res.status(404).json({ error: "Serie no encontrada" });
    } else {
      res.json(serie);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la serie" });
  }
});

// POST - Create a new Serie
router.post("/", async (req, res) => {
  const { nombre, clasificacion } = req.body;
  try {
    const serieCreada = await prisma.serie.create({
      data: {
        nombre,
        clasificacion,
      },
    });
    res.status(201).json(serieCreada);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la serie" });
  }
});

// PUT - Update an existing Serie by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, clasificacion } = req.body;
  try {
    const serieActualizada = await prisma.serie.update({
      where: { id: Number(id) },
      data: {
        nombre,
        clasificacion,
      },
    });
    res.json(serieActualizada);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la serie" });
  }
});

export default router;
