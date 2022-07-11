import React, {useState} from 'react';
import ToDoList from './components/ToDoList'
import './App.css';
import InputField from "./components/InputField";

function App() {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const addTodo = () => {
        if (text.trim().length) {
            setTodos([
                ...todos,
                {
                    id: new Date().toString(),
                    text,
                    completed: false,
                }
            ])
            setText('')
        }
    }

    const removeToDo = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    const toggleCompleted = (todoId) => {
        setTodos(
            todos.map(
                todo => {
                    if (todo.id !== todoId) return todo
                    return {...todo, completed: !todo.completed}
                }
            )
        )
    }


    return (
        <div className='App'>
            <InputField
                text={text}
                textInput={setText}
                handleSubmit={addTodo}
            />

            <ToDoList
                todos={todos}
                toggleCompleted={toggleCompleted}
                removeToDo={removeToDo}
            />
        </div>
    );
}

export default App;