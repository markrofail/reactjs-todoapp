import React, { Component } from 'react';
import './App.css';
import Todos from './components/todo/Todos'

class App extends Component {
  state = {
    'todos': [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
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

  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <Todos todos={this.state.todos}
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo}
        />
      </div>
    )
  }
}


export default App;
