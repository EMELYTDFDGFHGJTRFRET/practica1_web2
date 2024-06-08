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
// GET - Retrieve all Series
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const series = yield prisma.serie.findMany();
        res.json(series);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener las series" });
    }
}));
// GET - Retrieve a Serie by ID
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const serie = yield prisma.serie.findUnique({
            where: { id: Number(id) },
        });
        if (!serie) {
            res.status(404).json({ error: "Serie no encontrada" });
        }
        else {
            res.json(serie);
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener la serie" });
    }
}));
// POST - Create a new Serie
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, clasificacion } = req.body;
    try {
        const serieCreada = yield prisma.serie.create({
            data: {
                nombre,
                clasificacion,
            },
        });
        res.status(201).json(serieCreada);
    }
    catch (error) {
        res.status(500).json({ error: "Error al crear la serie" });
    }
}));
// PUT - Update an existing Serie by ID
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, clasificacion } = req.body;
    try {
        const serieActualizada = yield prisma.serie.update({
            where: { id: Number(id) },
            data: {
                nombre,
                clasificacion,
            },
        });
        res.json(serieActualizada);
    }
    catch (error) {
        res.status(500).json({ error: "Error al actualizar la serie" });
    }
}));
exports.default = router;
