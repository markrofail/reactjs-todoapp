import React, { useState, useEffect } from 'react'
import axios from 'axios'

import TodoList from './TodoList'
import TodoForm from './TodoForm'
import './TodoApp.css';

function TodoApp() {
    const [todos, setTodos] = useState([]);

    // LifeCycle method: onStart
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => setTodos(res.data))
    }, [])

    // Add Todo
    const createTodo = title => {
        const newTodo = {
            title,
            completed: false
        }

        // update Backend
        axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
            .then(res =>
                // update UI
                setTodos([...todos, res.data])
            )
    }

    // Toggle Compelete
    const toggleComplete = (id, index) => {
        // update local state
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;

        axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, newTodos[index])
            .then(_ => {
                // update UI
                setTodos(newTodos);
            })
    }

    // Delete Todo
    const deleteTodo = (id, index) => {
        // update local state
        const newTodos = [...todos];
        newTodos.splice(index, 1);

        // update Backend
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(_ => {
                // update UI
                setTodos(newTodos);
            })
    }

    return (
        <>
            <TodoForm
                createTodo={createTodo}
            />

            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
            />
        </>
    )
}

export default TodoApp
