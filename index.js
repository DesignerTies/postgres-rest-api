const express = require("express");
const app = express();
const pool = require("./database/db");

app.use(express.json());

// post nieuw persoon

app.post("/persoon", async (req, res) => {
  try {
    const data = req.body;

    const naam = data.naam;
    const leeftijd = data.leeftijd;

    const newPerson = await pool.query(
      "INSERT INTO persoon (naam, leeftijd) VALUES ($1, $2) RETURNING *",
      [naam, leeftijd]
    );
    res.json(newPerson);
  } catch (error) {
    console.error(error);
  }
});

// get alle personen

app.get("/personen", async (_req, res) => {
  try {
    const allePersonen = await pool.query("SELECT * FROM persoon");
    res.json(allePersonen.rows);
  } catch (error) {
    console.error(error);
  }
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
