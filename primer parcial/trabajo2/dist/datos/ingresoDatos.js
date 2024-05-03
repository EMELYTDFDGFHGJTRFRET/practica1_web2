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
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
function llenarDatos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            for (let i = 0; i < 10; i++) {
                yield prisma.serie.create({
                    data: {
                        nombre: `Serie ${i + 1}`,
                        clasificacion: `Clasificación ${i + 1}`
                    }
                });
            }
            for (let i = 0; i < 10; i++) {
                yield prisma.personaje.create({
                    data: {
                        nombre: `Personaje ${i + 1}`,
                        anosExperiencia: Math.floor(Math.random() * 20)
                    }
                });
            }
            for (let i = 0; i < 10; i++) {
                yield prisma.asignacion.create({
                    data: {
                        serieId: Math.floor(Math.random() * 10) + 1,
                        personajeId: Math.floor(Math.random() * 10) + 1,
                        papelInterpreta: `Papel ${i + 1}`,
                        tipoPapel: `Tipo ${i + 1}`,
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
