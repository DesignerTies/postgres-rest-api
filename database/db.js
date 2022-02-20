const Pool = require("pg/lib").Pool;
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  password: process.env.DATABASE_PASSWORD,
  database: "test_db",
  host: "db",
  port: 5432,
});

module.exports = pool;
