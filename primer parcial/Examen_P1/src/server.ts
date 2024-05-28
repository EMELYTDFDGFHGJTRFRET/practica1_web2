import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.put('/update-entorno', async (req, res) => {
  const { entity, entityId, entornoId } = req.body;

  if (!entity || !entityId || !entornoId) {
    return res.status(400).send('Missing required parameters');
  }

  try {
    switch (entity) {
      case 'serie':
        await prisma.serie.update({
          where: { id: entityId },
          data: {
            entornos: {
              connect: { id: entornoId }
            }
          }
        });
        break;
      case 'personaje':
        await prisma.personaje.update({
          where: { id: entityId },
          data: {
            entornos: {
              connect: { id: entornoId }
            }
          }
        });
        break;
      case 'asignacion':
        await prisma.asignacion.update({
          where: { id: entityId },
          data: {
            entorno: {
              connect: { id: entornoId }
            }
          }
        });
        break;
      default:
        return res.status(400).send('Invalid entity type');
    }

    res.status(200).send('Entorno updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
