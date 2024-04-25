"use strict";
function validarAsignacion(asignacion, callback) {
    const serie = series.find(s => s.id === asignacion.serieId);
    const personaje = personajes.find(p => p.id === asignacion.personajeId);
    if (serie && personaje) {
        callback(null, serie, personaje, asignacion);
    }
    else {
        callback("Serie o personaje no encontrado", null, null, null);
    }
}
