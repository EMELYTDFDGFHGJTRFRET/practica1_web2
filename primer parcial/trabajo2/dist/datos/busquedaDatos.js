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
exports.buscarAsignacionPorId = exports.buscarPersonajePorId = exports.buscarSeriePorId = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function buscarSeriePorId(serieId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const serieEncontrada = yield prisma.serie.findUnique({
                where: {
                    id: serieId
                }
            });
            if (serieEncontrada) {
                console.log("Serie encontrada:");
                console.log(serieEncontrada);
            }
            else {
                console.log(`No se encontró ninguna serie con el ID ${serieId}`);
            }
        }
        catch (error) {
            console.error("Error al buscar serie:", error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
exports.buscarSeriePorId = buscarSeriePorId;
function buscarPersonajePorId(personajeId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const personajeEncontrado = yield prisma.personaje.findUnique({
                where: {
                    id: personajeId
                }
            });
            if (personajeEncontrado) {
                console.log("-----------------------------------------");
                console.log("Personaje encontrado:");
                console.log(personajeEncontrado);
                console.log("-----------------------------------------");
            }
            else {
                console.log(`No se encontró ningún personaje con el ID ${personajeId}`);
            }
        }
        catch (error) {
            console.error("Error al buscar personaje:", error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
exports.buscarPersonajePorId = buscarPersonajePorId;
function buscarAsignacionPorId(asignacionId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const asignacionEncontrada = yield prisma.asignacion.findUnique({
                where: {
                    id: asignacionId
                }
            });
            if (asignacionEncontrada) {
                console.log("Asignación encontrada:");
                console.log(asignacionEncontrada);
            }
            else {
                console.log(`No se encontró ninguna asignación con el ID ${asignacionId}`);
            }
        }
        catch (error) {
            console.error("Error al buscar asignación:", error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
exports.buscarAsignacionPorId = buscarAsignacionPorId;
