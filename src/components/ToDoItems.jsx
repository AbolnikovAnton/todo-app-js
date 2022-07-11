import React from 'react';

const ToDoItems = ({id, completed, text, removeToDo, toggleCompleted}) => {
    return (
            <li>
                <input type="checkbox" checked={completed} onChange={() => toggleCompleted(id)}/>
                <span>{text}</span>
                <span className='delete' onClick={() => removeToDo(id)}>&times;</span>
            </li>
    );
};

export default ToDoItems;