import React, { Component } from 'react';
import './App.css';
import Todos from './components/todo/Todos'
import AddTodo from './components/todo/AddTodo'
import Header from './components/layout/Header'
import { v4 as uuid } from 'uuid'

class App extends Component {
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
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo
            createTodo={this.createTodo}
          />
          <Todos todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div >
    )
  }
}


export default App;
