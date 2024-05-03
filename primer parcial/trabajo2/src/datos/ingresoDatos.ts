const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export async function llenarDatos() {
    try {
      for (let i = 0; i < 10; i++) {
        await prisma.serie.create({
          data: {
            nombre: `Serie ${i + 1}`,
            clasificacion: `Clasificación ${i + 1}`
          }
        });
      }
  
      for (let i = 0; i < 10; i++) {
        await prisma.personaje.create({
          data: {
            nombre: `Personaje ${i + 1}`,
            anosExperiencia: Math.floor(Math.random() * 20) 
          }
        });
      }
        for (let i = 0; i < 10; i++) {
        await prisma.asignacion.create({
          data: {
            serieId: Math.floor(Math.random() * 10) + 1, 
            personajeId: Math.floor(Math.random() * 10) + 1, 
            papelInterpreta: `Papel ${i + 1}`,
            tipoPapel: `Tipo ${i + 1}`,
            fechaInicio: new Date(),
            fechaFin: new Date(),
            temporadas: Math.floor(Math.random() * 10) + 1 
          }
        });
      }
  
      console.log("Datos insertados correctamente.");
    } catch (error) {
      console.error("Error al insertar datos:", error);
    } finally {
      await prisma.$disconnect(); 
    }
  }
  