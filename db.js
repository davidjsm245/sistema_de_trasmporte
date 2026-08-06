const mysql = require("mysql2");
require("dotenv").config();

// En XAMPP local no necesitas SSL ni puerto especial.
// En un host en la nube (Aiven, Clever Cloud, Railway, etc.) SÍ necesitas
// el puerto que te dan y, casi siempre, conexión SSL.
const useSSL = process.env.DB_SSL === "true";

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  ...(useSSL ? { ssl: { rejectUnauthorized: false } } : {}),
});

db.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("Conexión a la base de datos establecida (mysql)");
});

module.exports = db;