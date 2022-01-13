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
    port: 3307,
  }
);

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "Computador1",
  database: "Hackatonapp",
  port: 3307,
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
