//this file is going to config how we are going
//to connect to our database
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Linux@root",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
