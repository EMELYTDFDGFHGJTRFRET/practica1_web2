import { PrismaClient, Serie, Personaje, Asignacion } from '@prisma/client';

const prisma = new PrismaClient();

export async function consultarDatos(): Promise<void> {
  try {
    const asignaciones: Asignacion[] = await prisma.asignacion.findMany();

    console.log("-----------------------------------------");
    console.log("Asignaciones encontradas:");
    asignaciones.forEach(asignacion => {
      console.log("ID de Asignación:", asignacion.id);
      console.log("Papel que interpreta:", asignacion.papelInterpreta);
      console.log("Tipo de papel:", asignacion.tipoPapel);
      console.log("Fecha de inicio:", asignacion.fechaInicio);
      console.log("Fecha de fin:", asignacion.fechaFin);
      console.log("Número de temporadas:", asignacion.temporadas);
      console.log("-----------------------------------------");
    });

    const series: Serie[] = await prisma.serie.findMany();

    console.log("-----------------------------------------");
    console.log("Series encontradas:");
    series.forEach(serie => {
      console.log("ID de Serie:", serie.id);
      console.log("Nombre de Serie:", serie.nombre);
      console.log("Clasificación:", serie.clasificacion);
      console.log("-----------------------------------------");
    });

    const personajes: Personaje[] = await prisma.personaje.findMany();

    console.log("-----------------------------------------");
    console.log("Personajes encontrados:");
    personajes.forEach(personaje => {
      console.log("ID de Personaje:", personaje.id);
      console.log("Nombre de Personaje:", personaje.nombre);
      console.log("Años de experiencia:", personaje.anosExperiencia);
      console.log("-----------------------------------------");
    });

  } catch (error) {
    console.error("Error al consultar datos:", error);
  } finally {
    await prisma.$disconnect();
  }
}


