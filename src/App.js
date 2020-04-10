import React, { Component } from 'react';
import Todos from './Todos'
import AddTodos from './AddTodos'

class App extends Component {
  state = {
    todos: [
      
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    const todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h2 className="center blue-text">Todo's App</h2>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodos addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
