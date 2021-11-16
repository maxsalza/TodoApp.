import React, { useState } from 'react';
import { AddToDoItemBar } from '../../Components/AddToDoItemBar';
import { ToDoItems } from '../../Components/ToDoItems';

export const HomePage = () => {
    const [task, setTask] = useState("")
    const handleDelete = () => {
        console.log('Inside Delete')
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
                <AddToDoItemBar handleSubmit={setTask} task={task}/>
                <ToDoItems handleDelete={handleDelete} handleDone={handleDone} handleEdit={handleEdit} title={task}/>

        </div>

    )

}
