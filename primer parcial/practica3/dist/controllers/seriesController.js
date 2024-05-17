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
exports.deleteSerie = exports.updateSerie = exports.createSerie = exports.getSeries = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient;
const getSeries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const series = yield prisma.serie.findMany({
            where: { estado: 'activo' },
        });
        res.json(series);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener las series.' });
    }
});
exports.getSeries = getSeries;
const createSerie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, clasificacion } = req.body;
        const newSerie = yield prisma.serie.create({
            data: { nombre, clasificacion },
        });
        res.json(newSerie);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear la serie.' });
    }
});
exports.createSerie = createSerie;
const updateSerie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nombre, clasificacion, estado } = req.body;
        const updatedSerie = yield prisma.serie.update({
            where: { id: Number(id) },
            data: { nombre, clasificacion, estado },
        });
        res.json(updatedSerie);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar la serie.' });
    }
});
exports.updateSerie = updateSerie;
const deleteSerie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedSerie = yield prisma.serie.update({
            where: { id: Number(id) },
            data: { estado: 'eliminando' },
        });
        res.json(deletedSerie);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar la serie.' });
    }
});
exports.deleteSerie = deleteSerie;
