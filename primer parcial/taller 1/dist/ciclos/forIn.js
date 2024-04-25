"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forIn = void 0;
const forIn = (series, personajes, asignaciones) => {
    console.log("---------------------------------------------");
    console.log("Información utilizando el ciclo For In:");
    for (const key in series) {
        console.log(`Series:`);
        console.log(`- ${series[key].nombre}, Clasificación: ${series[key].clasificacion}`);
    }
    for (const key in personajes) {
        console.log(`Personajes:`);
        console.log(`- ${personajes[key].nombre}, Edad: ${personajes[key].anios} años`);
    }
    for (const key in asignaciones) {
        const asignacion = asignaciones[key];
        const serie = series.find(s => s.id === asignacion.serieId);
        const personaje = personajes.find(p => p.id === asignacion.personajeId);
        if (serie && personaje) {
            console.log(`- Serie: ${serie.nombre}, Personaje: ${personaje.nombre}, Papel: ${asignacion.papelInterpreta}`);
        }
        else {
            console.log("- Serie o personaje no encontrado");
        }
    }
    console.log("---------------------------------------------");
    console.log("\n");
};
exports.forIn = forIn;
