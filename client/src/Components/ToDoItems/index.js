import React from 'react'

export const ToDoItems = ({ handleDone, handleDelete, handleEdit, title }) => {
    return (

        <div className="ui small icon input">
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <div className="meta">
                            {title}
                        </div>
                        <div className="extra content">
                            <div className="ui three buttons">
                                <div className="ui basic green button"
                                    onClick={() => handleDone()}
                                >Done</div>
                                <div className="ui basic red button"
                                    onClick={() => handleDelete()}
                                >Delete</div>
                                <div className="ui basic blue button"
                                    onClick={() => handleEdit()}
                                >Edit</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
