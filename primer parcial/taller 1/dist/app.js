"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forIn_1 = require("./ciclos/forIn");
const forEach_1 = require("./ciclos/forEach");
const forOf_1 = require("./ciclos/forOf");
const series = [
    { id: 1, nombre: "Perder mi amigos", clasificacion: "Drama" },
    { id: 2, nombre: "Breaking Bad", clasificacion: "Drama" },
    { id: 3, nombre: "Fallow", clasificacion: "Ciencia ficción" }
];
const personajes = [
    { id: 1, nombre: "Emely", anios: "20" },
    { id: 2, nombre: "Walter White", anios: "25" },
    { id: 3, nombre: "Alisson", anios: "30" }
];
const asignaciones = [
    {
        id: 1,
        serieId: 1,
        personajeId: 1,
        papelInterpreta: "Romeo y Julieta",
        tipoPapel: "Principal",
        fechaInicio: new Date("2011-04-17"),
        fechaFin: new Date("2019-05-19"),
        temporadas: "8",
    },
    {
        id: 2,
        serieId: 2,
        personajeId: 2,
        papelInterpreta: "Escuela para niños",
        tipoPapel: "Principal",
        fechaInicio: new Date("2008-01-20"),
        fechaFin: new Date("2013-09-29"),
        temporadas: "5",
    }
];
(0, forIn_1.forIn)(series, personajes, asignaciones);
(0, forEach_1.forEach)(series, personajes, asignaciones);
(0, forOf_1.forOf)(series, personajes, asignaciones);
