
import { ISerie } from "./interfacs/ISerie";
import { IAsignacion } from "./interfacs/IAsignacion";
import { IPersonaje } from "./interfacs/IPersonaje";
import { forIn } from "./ciclos/forIn";
import { forEach } from "./ciclos/forEach";
import { forOf } from "./ciclos/forOf";
import { validarAsignacion } from "./funtions/funtions";
import { getPokemon } from "./plugins/getData";


//Primer puntooo

const series: ISerie[] = [
    { id: 1, nombre: "Perder mi amigos", clasificacion: "Drama" },
    { id: 2, nombre: "Breaking Bad", clasificacion: "Drama" },
    { id: 3, nombre: "Fallow", clasificacion: "Ciencia ficción" }
  ];
  
const personajes: IPersonaje[] = [
    { id: 1, nombre: "Emely", aniosExperiencia: "5" },
    { id: 2, nombre: "Walter White", aniosExperiencia: "10" },
    { id: 3, nombre: "Alisson", aniosExperiencia: "2" }
  ];
  
const asignaciones: IAsignacion[] = [
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

//Segundo puntooo

  forIn(series,personajes,asignaciones);
  forEach(series,personajes,asignaciones);
  forOf(series,personajes,asignaciones);

// tercer punto

validarAsignacion(asignaciones, series, personajes, (error, serie, personaje, asignacion) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Serie encontrada:", serie);
        console.log("Personaje encontrado:", personaje);
        console.log("Asignación:", asignacion);
    }
});

//cuarto punto
async function main() {
  try {
      const generar = await getPokemon(10);
      console.log(generar);
  } catch (error) {
      console.error('Error:', error);
  }
}

main();