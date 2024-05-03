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
exports.llenarDatos = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function llenarDatos() {
    return __awaiter(this, void 0, void 0, function* () {
        const nombresSeries = ['Breaking Bad', 'Game of Thrones', 'Stranger Things', 'Friends', 'The Office', 'The Mandalorian', 'Black Mirror', 'The Crown', 'Narcos', 'The Witcher'];
        const clasificaciones = ['Drama', 'Fantasía', 'Ciencia ficción', 'Comedia', 'Drama', 'Aventura', 'Ciencia ficción', 'Drama', 'Drama', 'Fantasía'];
        const nombresPersonajes = ['Walter White', 'Jon Snow', 'Eleven', 'Rachel Green', 'Michael Scott', 'The Mandalorian', 'Ashley O', 'Elizabeth II', 'Pablo Escobar', 'Geralt of Rivia'];
        const nombresPapel = ['Protagonista', 'Antagonista', 'Secundario', 'Cameo', 'Invitado', 'Recurrente', 'Principal', 'Extra', 'Coprotagonista', 'Principal'];
        const tiposPapel = ['Protagonista', 'Secundario', 'Antagonista', 'Cameo', 'Invitado', 'Recurrente', 'Principal', 'Extra', 'Coprotagonista', 'Principal'];
        try {
            for (let i = 0; i < 10; i++) {
                yield prisma.serie.create({
                    data: {
                        nombre: nombresSeries[i],
                        clasificacion: clasificaciones[i]
                    }
                });
            }
            for (let i = 0; i < 10; i++) {
                yield prisma.personaje.create({
                    data: {
                        nombre: nombresPersonajes[i],
                        anosExperiencia: Math.floor(Math.random() * 20)
                    }
                });
            }
            for (let i = 0; i < 10; i++) {
                yield prisma.asignacion.create({
                    data: {
                        serieId: Math.floor(Math.random() * 10) + 1,
                        personajeId: Math.floor(Math.random() * 10) + 1,
                        papelInterpreta: nombresPapel[i], // Usando nombresPapel en lugar de `Papel ${i + 1}`
                        tipoPapel: tiposPapel[i],
                        fechaInicio: new Date(),
                        fechaFin: new Date(),
                        temporadas: Math.floor(Math.random() * 10) + 1
                    }
                });
            }
            console.log("Datos insertados correctamente.");
        }
        catch (error) {
            console.error("Error al insertar datos:", error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
exports.llenarDatos = llenarDatos;
