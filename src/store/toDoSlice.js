import {createSlice} from '@reduxjs/toolkit'


const toDoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toString(),
                text: action.payload.text,
                completed: false,
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleCompleted(state, action) {
            const chekedTodo = state.todos.find(todo => todo.id === action.payload.id)
            chekedTodo.completed = !chekedTodo.completed
        }
    }
})


export const {addTodo, removeTodo, toggleCompleted} = toDoSlice.actions

export default toDoSlice.reducer