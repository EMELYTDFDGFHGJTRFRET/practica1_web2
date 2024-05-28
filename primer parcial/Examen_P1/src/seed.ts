import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Insertar entornos
  const desarrollo = await prisma.entorno.create({
    data: { descripcion: 'desarrollo' },
  });
  const prueba = await prisma.entorno.create({
    data: { descripcion: 'prueba' },
  });
  const produccion = await prisma.entorno.create({
    data: { descripcion: 'produccion' },
  });

  // Crear series, personajes y asignaciones como ejemplo
  const serie = await prisma.serie.create({
    data: {
      nombre: 'Serie Ejemplo',
      clasificacion: 'A',
      entornos: {
        create: [
          { entorno: { connect: { id: desarrollo.id } } },
          { entorno: { connect: { id: prueba.id } } },
          { entorno: { connect: { id: produccion.id } } },
        ],
      },
    },
  });

  const personaje = await prisma.personaje.create({
    data: {
      nombre: 'Personaje Ejemplo',
      anosExperiencia: 5,
      entornos: {
        create: [
          { entorno: { connect: { id: desarrollo.id } } },
          { entorno: { connect: { id: prueba.id } } },
          { entorno: { connect: { id: produccion.id } } },
        ],
      },
    },
  });

  const asignacion = await prisma.asignacion.create({
    data: {
      serieId: serie.id,
      personajeId: personaje.id,
      papel: 'Principal',
      tipoPapel: 'Protagonista',
      fechaInicio: new Date(),
      fechaFin: new Date(),
      temporadas: 1,
      entornoId: prueba.id,
    },
  });

  console.log({ desarrollo, prueba, produccion, serie, personaje, asignacion });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
