"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forEach = void 0;
const forEach = (series, personajes, asignaciones) => {
    console.log("---------------------------------------------");
    console.log("Información utilizando el método forEach:");
    console.log("Series:");
    series.forEach((serie) => {
        console.log(`- ${serie.nombre}, Clasificación: ${serie.clasificacion}`);
    });
    console.log("Personajes:");
    personajes.forEach((personaje) => {
        console.log(`- ${personaje.nombre}, Edad: ${personaje.anios} años`);
    });
    asignaciones.forEach((asignacion) => {
        const serie = series.find(s => s.id === asignacion.serieId);
        const personaje = personajes.find(p => p.id === asignacion.personajeId);
        if (serie && personaje) {
            console.log(`- Serie: ${serie.nombre}, Personaje: ${personaje.nombre}, Papel: ${asignacion.papelInterpreta}`);
        }
        else {
            console.log("- Serie o personaje no encontrado");
        }
    });
    console.log("---------------------------------------------");
    console.log("\n");
};
exports.forEach = forEach;
