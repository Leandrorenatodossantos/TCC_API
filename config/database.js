require('dotenv').config();
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10, // número de conexões simultâneas
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// pool.getConnection((err, connection) => {
//     if (err) {
//         console.error('Erro ao conectar no MySQL:', err);
//     } else {
//         console.log('Conexão com o banco MySQL estabelecida com sucesso!');
//         connection.release(); // libera a conexão de volta para o pool
//     }
// });

module.exports = pool;