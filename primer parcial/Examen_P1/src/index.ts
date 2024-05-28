import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const asignaciones = await prisma.asignacion.findMany({
    where: { entorno: { descripcion: 'prueba' } },
    include: { serie: true, personaje: true, entorno: true },
  });

  console.log(asignaciones);
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
