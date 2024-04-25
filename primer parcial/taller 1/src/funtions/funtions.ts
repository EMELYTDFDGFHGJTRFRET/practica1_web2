import { ISerie } from "../interfacs/ISerie";
import { IAsignacion } from "../interfacs/IAsignacion";
import { IPersonaje } from "../interfacs/IPersonaje";

export function validarAsignacion(asignaciones: IAsignacion[], series: ISerie[], personajes: IPersonaje[], callback: (error: string | null, serie: ISerie | null, personaje: IPersonaje | null, asignacion: IAsignacion | null) => void) {
    for (const asignacion of asignaciones) {
        const serie = series.find(s => s.id === asignacion.serieId);
        const personaje = personajes.find(p => p.id === asignacion.personajeId);
        if (serie && personaje) {
            callback(null, serie, personaje, asignacion);
        } else {
            callback("Serie o personaje no encontrado", null, null, null);
        }
    }
}