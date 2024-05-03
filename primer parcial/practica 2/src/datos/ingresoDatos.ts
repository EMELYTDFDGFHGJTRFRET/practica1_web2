import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function llenarDatos() {
    const nombresSeries = ['Breaking Bad', 'Game of Thrones', 'Stranger Things', 'Friends', 'The Office', 'The Mandalorian', 'Black Mirror', 'The Crown', 'Narcos', 'The Witcher'];
    const clasificaciones = ['Drama', 'Fantasía', 'Ciencia ficción', 'Comedia', 'Drama', 'Aventura', 'Ciencia ficción', 'Drama', 'Drama', 'Fantasía'];

    const nombresPersonajes = ['Walter White', 'Jon Snow', 'Eleven', 'Rachel Green', 'Michael Scott', 'The Mandalorian', 'Ashley O', 'Elizabeth II', 'Pablo Escobar', 'Geralt of Rivia'];

    const nombresPapel = ['Protagonista', 'Antagonista', 'Secundario', 'Cameo', 'Invitado', 'Recurrente', 'Principal', 'Extra', 'Coprotagonista', 'Principal'];

    const tiposPapel = ['Protagonista', 'Secundario', 'Antagonista', 'Cameo', 'Invitado', 'Recurrente', 'Principal', 'Extra', 'Coprotagonista', 'Principal'];

    try {
        for (let i = 0; i < 10; i++) {
            await prisma.serie.create({
                data: {
                    nombre: nombresSeries[i],
                    clasificacion: clasificaciones[i]
                }
            });
        }

        for (let i = 0; i < 10; i++) {
            await prisma.personaje.create({
                data: {
                    nombre: nombresPersonajes[i],
                    anosExperiencia: Math.floor(Math.random() * 20)
                }
            });
        }

        for (let i = 0; i < 10; i++) {
            await prisma.asignacion.create({
                data: {
                    serieId: Math.floor(Math.random() * 10) + 1,
                    personajeId: Math.floor(Math.random() * 10) + 1,
                    papelInterpreta: nombresPapel[i], // Usando nombresPapel en lugar de `Papel ${i + 1}`
                    tipoPapel: tiposPapel[i],
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
