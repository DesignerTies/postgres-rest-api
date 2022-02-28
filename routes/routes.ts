import { PrismaClient } from '@prisma/client';
const express = require('express');
const router = express.Router();

const prisma = new PrismaClient();

router.get('/', (_req, res) => {
  res.send('Simpele postgres api');
});

router.get('/personen', async (_req, res) => {
  const allePersonen: object = await prisma.persoon.findMany();
  res.json(allePersonen);
});

router.get('/personen/:naam', async (req, res) => {
  const naam: string = req.params.naam;

  const aanvraagFilms: object = await prisma.persoon.findMany({
    where: {
      naam: {
        contains: naam,
        mode: 'insensitive',
      },
    },
  });

  res.json(aanvraagFilms);
});

router.post('/persoon', async (req, res, next) => {
  const data = req.body;
  const naam: string = data.naam.toLowercase();
  const leeftijd: number = data.leeftijd;

  try {
    const newPerson = await prisma.persoon.create({
      data: {
        naam: naam,
        leeftijd: leeftijd,
      },
    });
    res.json(newPerson);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
