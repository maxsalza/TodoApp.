import axios from 'axios';
import React, { useState } from 'react';


export const AddToDoItemBar = ({handleSubmit, task}) => {
   const [item, seTitem] = useState("")
    return (
        <div>
            <div className="ui small icon input">
                <input value={item} onChange={
                    e => seTitem (  e.target.value )
                } placeholder="Your Task..." />
            </div>
            <button className="ui blue button" 
            onClick={() => {
                handleSubmit([...task, item])
                axios.post('http://localhost:4000/addTask',{item})
            }} 
            >Submit</button>
        </div>
    )
}
