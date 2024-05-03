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
exports.consultarDatos = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function consultarDatos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const asignaciones = yield prisma.asignacion.findMany();
            console.log("-----------------------------------------");
            console.log("Asignaciones encontradas:");
            asignaciones.forEach(asignacion => {
                console.log("ID de Asignación:", asignacion.id);
                console.log("Papel que interpreta:", asignacion.papelInterpreta);
                console.log("Tipo de papel:", asignacion.tipoPapel);
                console.log("Fecha de inicio:", asignacion.fechaInicio);
                console.log("Fecha de fin:", asignacion.fechaFin);
                console.log("Número de temporadas:", asignacion.temporadas);
                console.log("-----------------------------------------");
            });
            const series = yield prisma.serie.findMany();
            console.log("-----------------------------------------");
            console.log("Series encontradas:");
            series.forEach(serie => {
                console.log("ID de Serie:", serie.id);
                console.log("Nombre de Serie:", serie.nombre);
                console.log("Clasificación:", serie.clasificacion);
                console.log("-----------------------------------------");
            });
            const personajes = yield prisma.personaje.findMany();
            console.log("-----------------------------------------");
            console.log("Personajes encontrados:");
            personajes.forEach(personaje => {
                console.log("ID de Personaje:", personaje.id);
                console.log("Nombre de Personaje:", personaje.nombre);
                console.log("Años de experiencia:", personaje.anosExperiencia);
                console.log("-----------------------------------------");
            });
        }
        catch (error) {
            console.error("Error al consultar datos:", error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
exports.consultarDatos = consultarDatos;
