import React, { useState } from 'react';
import { AddToDoItemBar } from '../../Components/AddToDoItemBar';
import { ToDoItems } from '../../Components/ToDoItems';
import axios from "axios";

export const HomePage = () => {
    const [task, setTask] = useState([])
    const handleDelete = (id) => {
        axios.delete('https://localhost:4000/deleteTask/'+id);
        
    }
    const handleDone = () => {
        console.log('Inside Delete')
    }
    const handleEdit = () => {
        console.log('Inside Delete')
    }

    return (
        <div>
            <h1>To Do</h1>
            <AddToDoItemBar handleSubmit={setTask} task={task} />
            {/* <ToDoItems handleDelete={handleDelete} handleDone={handleDone} handleEdit={handleEdit} title={task}/> */}
            {task.map((item) => {
                return (
                    <div className="ContentTask">
                        <ToDoItems handleDelete={handleDelete} handleDone={handleDone} handleEdit={handleEdit} title={item} />

                    </div>
                )

            })}
        </div>

    )

}
