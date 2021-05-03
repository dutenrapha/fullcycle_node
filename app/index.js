const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql_insert = `INSERT INTO people(name) values('João')`
connection.query(sql_insert)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Full cycle Rocks!</h1>')
    
    connection.query('SELECT name FROM people', (err, rows) => {
        if(err) throw err
        console.log(rows);
      }).end();
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})