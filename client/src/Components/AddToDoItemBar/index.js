import React from 'react'

export const AddToDoItemBar = ({handleSubmit, task}) => {
    return (
        <div>
            <div className="ui small icon input">
                <input value={task} onChange={
                    e => handleSubmit (  e.target.value )
                } placeholder="Your Task..." />
            </div>
            <button className="ui blue button">Submit</button>
        </div>
    )
}
