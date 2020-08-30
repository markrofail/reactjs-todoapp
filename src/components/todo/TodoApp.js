import React, { Component } from 'react'
import TodoList from './TodoList'
import NewTodoForm from './NewTodoForm'
import axios from 'axios'

export class TodoApp extends Component {
    state = {
        'todos': []
    }

    // LifeCycle method: onStart
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => this.setState({ todos: res.data }))
    }

    // Toggle Compelete
    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        })
    }

    // Delete Todo
    deleteTodo = (id) => {
        // update Backend
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => {
                // update UI
                this.setState({
                    todos: [...this.state.todos.filter(todo => (todo.id !== id))]
                })
            }
        )
    }

    // Add Todo
    createTodo = (title) => {
        const newTodo = {
            title,
            completed: false
        }

        // update Backend
        axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
            .then(res =>
                // update UI
                this.setState({
                    todos: [...this.state.todos, res.data]
                }
            )
        )
    }


    render() {
        return (
            <React.Fragment>
                <NewTodoForm
                    createTodo={this.createTodo}
                />
                <TodoList
                    todos={this.state.todos}
                    toggleComplete={this.toggleComplete}
                    deleteTodo={this.deleteTodo}
                />
            </React.Fragment>
        )
    }
}

export default TodoApp
