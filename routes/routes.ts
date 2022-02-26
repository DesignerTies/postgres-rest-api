import { PrismaClient } from '@prisma/client';
const express = require('express');
const router = express.Router();

const prisma = new PrismaClient();

router.get('/', (_req: any, res: any) => {
  res.send('Simpele postgres api');
});

router.get('/personen', async (_req: any, res: any) => {
  const allePersonen: object = await prisma.persoon.findMany();
  res.json(allePersonen);
});

router.post('/persoon', async (req: any, res: any, next: any) => {
  const data = req.body;
  const naam = data.naam;
  const leeftijd = data.leeftijd;

  console.log(typeof data);

  try {
    const newPerson = await prisma.persoon.create({
      data: {
        naam: naam,
        leeftijd: leeftijd,
      },
    });

    res.json(newPerson);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
