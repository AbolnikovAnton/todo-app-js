import React from 'react';
import ToDoItems from "./ToDoItems";

const ToDoList = ({todos, removeToDo, toggleCompleted}) => {
    return (
        <ul>
            {
                todos.map(todo =>
                    <ToDoItems
                        key={todo.id}
                        removeToDo={removeToDo}
                        toggleCompleted={toggleCompleted}
                        {...todo}
                    />)
            }
        </ul>
    );
};

export default ToDoList;