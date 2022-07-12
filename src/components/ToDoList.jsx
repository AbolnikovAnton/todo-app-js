import React from 'react';
import ToDoItems from "./ToDoItems";
import {useSelector} from "react-redux";

const ToDoList = () => {
    const todos = useSelector(state => state.todos.todos);


    return (
        <ul>
            {
                todos.map(todo =>
                    <ToDoItems
                        key={todo.id}
                        {...todo}
                    />)
            }
        </ul>
    );
};

export default ToDoList;