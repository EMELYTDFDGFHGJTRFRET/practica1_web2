import { ISerie } from "../interfacs/ISerie";
import { IAsignacion } from "../interfacs/IAsignacion";
import { IPersonaje } from "../interfacs/IPersonaje";

export const forEach = (series: ISerie[], personajes: IPersonaje[], asignaciones: IAsignacion[]) => {
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
        } else {
            console.log("- Serie o personaje no encontrado");
        }
    });

    console.log("---------------------------------------------");
    console.log("\n");
};
