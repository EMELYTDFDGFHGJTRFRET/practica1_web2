import { PrismaClient, Serie, Personaje, Asignacion } from '@prisma/client';

const prisma = new PrismaClient();

export async function buscarSeriePorId(serieId: number): Promise<void> {
  try {
    const serieEncontrada: Serie | null = await prisma.serie.findUnique({
      where: {
        id: serieId
      }
    });

    if (serieEncontrada) {
      console.log("Serie encontrada:");
      console.log(serieEncontrada);
    } else {
      console.log(`No se encontró ninguna serie con el ID ${serieId}`);
    }
  } catch (error) {
    console.error("Error al buscar serie:", error);
  } finally {
    await prisma.$disconnect(); 
  }
}

export async function buscarPersonajePorId(personajeId: number): Promise<void> {
  try {
    const personajeEncontrado: Personaje | null = await prisma.personaje.findUnique({
      where: {
        id: personajeId
      }
    });

    if (personajeEncontrado) {
      console.log("-----------------------------------------");
      console.log("Personaje encontrado:");
      console.log(personajeEncontrado);
      console.log("-----------------------------------------");
    } else {
      console.log(`No se encontró ningún personaje con el ID ${personajeId}`);
    }
  } catch (error) {
    console.error("Error al buscar personaje:", error);
  } finally {
    await prisma.$disconnect(); 
  }
}

export async function buscarAsignacionPorId(asignacionId: number): Promise<void> {
  try {
    const asignacionEncontrada: Asignacion | null = await prisma.asignacion.findUnique({
      where: {
        id: asignacionId
      }
    });

    if (asignacionEncontrada) {
      console.log("Asignación encontrada:");
      console.log(asignacionEncontrada);
    } else {
      console.log(`No se encontró ninguna asignación con el ID ${asignacionId}`);
    }
  } catch (error) {
    console.error("Error al buscar asignación:", error);
  } finally {
    await prisma.$disconnect(); 
  }
}

