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
exports.deletePersonaje = exports.updatePersonaje = exports.createPersonaje = exports.getPersonajes = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getPersonajes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personajes = yield prisma.personaje.findMany({
            where: { estado: 'activo' },
        });
        res.json(personajes);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener los personajes.' });
    }
});
exports.getPersonajes = getPersonajes;
const createPersonaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, anos_experiencia } = req.body;
        const newPersonaje = yield prisma.personaje.create({
            data: { nombre, anos_experiencia },
        });
        res.json(newPersonaje);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear el personaje.' });
    }
});
exports.createPersonaje = createPersonaje;
const updatePersonaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nombre, anos_experiencia, estado } = req.body;
        const updatedPersonaje = yield prisma.personaje.update({
            where: { id: Number(id) },
            data: { nombre, anos_experiencia, estado },
        });
        res.json(updatedPersonaje);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar el personaje.' });
    }
});
exports.updatePersonaje = updatePersonaje;
const deletePersonaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedPersonaje = yield prisma.personaje.update({
            where: { id: Number(id) },
            data: { estado: 'eliminando' },
        });
        res.json(deletedPersonaje);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el personaje.' });
    }
});
exports.deletePersonaje = deletePersonaje;
