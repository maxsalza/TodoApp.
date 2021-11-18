const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db');
const mysql = require('mysql2');
const app = express();

app.use(cors());
app.use(bodyParser.json())

app.get('/task', (req, res) => {
    res.send('list of all task')
    const ADD_QUERY ="SELECT * FROM tasks";
    connection.query(ADD_QUERY, (err, result) => {

        if (err) console.log(err)
        else res.send(result)

    });
})


app.post('/addTask', (req, res) => {
    const ADD_QUERY = "insert into tasks (tasks) values (" + mysql.escape(req.body.item) + ")";
    connection.query(ADD_QUERY, (err) => {

        if (err) console.log(err)
        else res.send('task has been added')

    });
})

app.delete('/deleteTask/: taskid', (req, res) => {
    const DELETE_QUERY = 'DELETE FROM tasks where id ='+req.params.taskid;
    connection.query(DELETE_QUERY, (err) => {

        if (err) console.log(err)
        else res.send('task has been deleted')

    });

})



app.listen(4000, () => {
    console.log('running on port 4000')
})