const Sequelize = require("sequelize");
const mysql = require("mysql2");
console.log(process.env.SQL_PASSWORD);
const sequelize = new Sequelize(
  "Hackatonapp",
  "root",
  process.env.SQL_PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
  }
);

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: process.env.SQL_PASSWORD,
  database: "Hackatonapp",
});

function query(sql) {
  return new Promise((resolve, reject) => {
    pool.query(sql, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

module.exports = {
  query,
  pool,
  sequelize,
};
