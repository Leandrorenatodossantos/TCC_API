require('dotenv').config();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,           // <- Adicione isso também!
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar no MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL');
});

module.exports = db;
