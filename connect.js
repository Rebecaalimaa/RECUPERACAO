//chamando as dependencias
const mysql = require('mysql')


const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'stockcar'
})

module.exports = {con}

