const mysql = require ('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    port:3307,
    user: 'root',
    password: 'dev1116',
    database: 'todoapp'
}) 

module.exports = connection;