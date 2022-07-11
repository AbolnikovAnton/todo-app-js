import React, {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toDateString(),
          text,
          completed: false,
        }
      ])
      setText('')
    }
  }


  return (
      <div>
        <input value={text} onChange={e => setText(e.target.value)}/>
        <button onClick={addTodo}>Add ToDo</button>
      </div>
  );
}

export default App;