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
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// GET - Retrieve all personaje
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const aspirantes = yield prisma.personaje.findMany();
        res.json(aspirantes);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener los personajes" });
    }
}));
// GET - Retrieve a Personaje by ID
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const personaje = yield prisma.personaje.findUnique({
            where: { id: Number(id) },
        });
        if (!personaje) {
            res.status(404).json({ error: "Personaje no encontrado" });
        }
        else {
            res.json(personaje);
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener el personaje" });
    }
}));
// POST - Create a new Personaje
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, anosExperiencia } = req.body;
    try {
        const personajeCreado = yield prisma.personaje.create({
            data: {
                nombre,
                anosExperiencia,
            },
        });
        res.status(201).json(personajeCreado);
    }
    catch (error) {
        res.status(500).json({ error: "Error al crear el personaje" });
    }
}));
// PUT - Update an existing Personaje by ID
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, anosExperiencia } = req.body;
    try {
        const personajeActualizado = yield prisma.personaje.update({
            where: { id: Number(id) },
            data: {
                nombre,
                anosExperiencia,
            },
        });
        res.json(personajeActualizado);
    }
    catch (error) {
        res.status(500).json({ error: "Error al actualizar el personaje" });
    }
}));
// DELETE - Delete a Personaje by ID
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.personaje.delete({
            where: { id: Number(id) },
        });
        res.json({ message: "Personaje eliminado correctamente" });
    }
    catch (error) {
        res.status(500).json({ error: "Error al eliminar el personaje" });
    }
}));
exports.default = router;
