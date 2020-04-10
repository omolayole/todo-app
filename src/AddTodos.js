import React, { Component } from 'react';

class AddTodos extends Component {
    state = {
        content: ''
    }

    handlechange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        })
    }

    render() {

        return (
            <div className="addTodos">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="todo">Add New Todo</label>
                    <input type="text" id="todo" onChange={this.handlechange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddTodos