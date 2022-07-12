import React, {useState} from 'react';
import ToDoList from './components/ToDoList'
import './App.css';
import InputField from "./components/InputField";
import {useDispatch} from "react-redux";
import {addTodo} from "./store/toDoSlice";

function App() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const addTodoByDispatch = () => {
        dispatch(addTodo({text}))
        setText('')
    }

    return (
        <div className='App'>
            <InputField
                text={text}
                textInput={setText}
                handleSubmit={addTodoByDispatch}
            />
            <ToDoList/>
        </div>
    );
}

export default App;