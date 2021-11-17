const express = require('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const connection = require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.get('/task',(req, res)=>{
    res.send('list of all task')
})

app.post('/addTask',(req, res)=>{
    const ADD_QUERY = `ìnsert into todoapp.tasks (tasks) values (${req.body.task})`
    res.send('you can add tasks')
})

app.get('/deleteTask',(req, res)=>{
    res.send('delete tasks')
})



app.listen(4000, ()=>{
    console.log('running on port 4000')
})