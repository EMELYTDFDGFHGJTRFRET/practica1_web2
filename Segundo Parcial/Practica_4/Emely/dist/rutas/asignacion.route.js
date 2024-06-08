"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
// GET - Retrieve all Asignaciones
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const asignaciones = yield prisma.asignacion.findMany();
        res.json(asignaciones);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener las asignaciones" });
    }
}));
// GET - Retrieve an Asignacion by ID
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const asignacion = yield prisma.asignacion.findUnique({
            where: { id: Number(id) },
            include: {
                serie: true,
                personaje: true,
            },
        });
        if (!asignacion) {
            res.status(404).json({ error: "Asignacion no encontrada" });
        }
        else {
            res.json(asignacion);
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener la asignacion" });
    }
}));
// POST - Create a new Asignacion
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_serie, id_personaje, papel, tipo, fechaInicio, fechaFin, temporadas } = req.body;
    try {
        const asignacionCreada = yield prisma.asignacion.create({
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
    }
    catch (error) {
        res.status(500).json({ error: "Error al crear la asignacion" });
    }
}));
// PUT - Update an existing Asignacion by ID
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { id_serie, id_personaje, papel, tipo, fechaInicio, fechaFin, temporadas } = req.body;
    try {
        const asignacionActualizada = yield prisma.asignacion.update({
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
    }
    catch (error) {
        res.status(500).json({ error: "Error al actualizar la asignacion" });
    }
}));
// DELETE - Delete an Asignacion by ID
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.asignacion.delete({
            where: { id: Number(id) },
        });
        res.json({ message: "Asignacion eliminada correctamente" });
    }
    catch (error) {
        res.status(500).json({ error: "Error al eliminar la asignacion" });
    }
}));
exports.default = router;
