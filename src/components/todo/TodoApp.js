import React, { Component } from 'react'
import TodoList from './TodoList'
import NewTodoForm from './NewTodoForm'
import { v4 as uuid } from 'uuid'

export class TodoApp extends Component {
    state = {
        'todos': [
            {
                "id": uuid(),
                "title": "delectus aut autem",
                "completed": false
            },
            {
                "id": uuid(),
                "title": "quis ut nam facilis et officia qui",
                "completed": false
            },
            {
                "id": uuid(),
                "title": "fugiat veniam minus",
                "completed": true
            },
        ]
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
        this.setState({
            todos: [...this.state.todos.filter(todo => (todo.id !== id))]
        })
    }

    // Add Todo
    createTodo = (title) => {
        const newTodo = {
            "id": uuid(),
            title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
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
