const express = require('express');
const cors = require ('cors');

const app = express();

app.use(cors());

app.get('/task',(req, res)=>{
    res.send('list of all task')
})

app.get('/addTask',(req, res)=>{
    res.send('you can add tasks')
})

app.get('/deleteTask',(req, res)=>{
    res.send('delete tasks')
})



app.listen(4000, ()=>{
    console.log('running on port 4000')
})