import { ISerie } from "../interfacs/ISerie";
import { IAsignacion } from "../interfacs/IAsignacion";
import { IPersonaje } from "../interfacs/IPersonaje";

export const forOf = (series: ISerie[], personajes: IPersonaje[], asignaciones: IAsignacion[]) => {
    console.log("---------------------------------------------");
    console.log("Información utilizando el ciclo For Of:");

    console.log("Series:");
    for (const serie of series) {
        console.log(`- ${serie.nombre}, Clasificación: ${serie.clasificacion}`);
    }

    console.log("Personajes:");
    for (const personaje of personajes) {
        console.log(`- ${personaje.nombre}, Edad: ${personaje.anios} años`);
    }

    for (const asignacion of asignaciones) {
        const serie = series.find(s => s.id === asignacion.serieId);
        const personaje = personajes.find(p => p.id === asignacion.personajeId);
        if (serie && personaje) {
            console.log(`- Serie: ${serie.nombre}, Personaje: ${personaje.nombre}, Papel: ${asignacion.papelInterpreta}`);
        } else {
            console.log("- Serie o personaje no encontrado");
        }
    }

    console.log("---------------------------------------------");
    console.log("\n");
};
