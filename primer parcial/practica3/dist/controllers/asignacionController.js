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
exports.deleteAsignacion = exports.updateAsignacion = exports.createAsignacion = exports.getAsignaciones = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAsignaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const asignaciones = yield prisma.asignacion.findMany({
            where: { estado: 'activo' },
            include: { serie: true, personaje: true },
        });
        res.json(asignaciones);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener las asignaciones.' });
    }
});
exports.getAsignaciones = getAsignaciones;
const createAsignacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idSerie, idPersonaje, papel, tipoPapel, fechaInicio, fechaFin, temporadas } = req.body;
        const newAsignacion = yield prisma.asignacion.create({
            data: { idSerie, idPersonaje, papel, tipoPapel, fechaInicio, fechaFin, temporadas },
        });
        res.json(newAsignacion);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear la asignación.' });
    }
});
exports.createAsignacion = createAsignacion;
const updateAsignacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { idSerie, idPersonaje, papel, tipoPapel, fechaInicio, fechaFin, temporadas, estado } = req.body;
        const updatedAsignacion = yield prisma.asignacion.update({
            where: { id: Number(id) },
            data: { idSerie, idPersonaje, papel, tipoPapel, fechaInicio, fechaFin, temporadas, estado },
        });
        res.json(updatedAsignacion);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar la asignación.' });
    }
});
exports.updateAsignacion = updateAsignacion;
const deleteAsignacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield prisma.asignacion.deleteMany({ where: { id: Number(id) } });
        res.json({ message: 'Asignación eliminada correctamente.' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar la asignación.' });
    }
});
exports.deleteAsignacion = deleteAsignacion;
