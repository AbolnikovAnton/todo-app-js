import React from 'react';
import {useDispatch} from "react-redux";
import {removeTodo, toggleCompleted} from "../store/toDoSlice";

const ToDoItems = ({id, completed, text}) => {
    const dispatch = useDispatch()


    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleCompleted({id}))}/>
            <span>{text}</span>
            <span
                className='closeModal'
                onClick={() => dispatch(removeTodo({id}))}>
            </span>
        </li>
    );
};

export default ToDoItems;