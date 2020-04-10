import React from 'react'

function Todos(props) {
    const { todos, deleteTodo } = props

    const todoList = todos.length ? (
            todos.map(todo => {
                return (
                    <div className="collection-item" key={todo.id}>
                        <span onClick={() => {deleteTodo(todo.id)}}>{ todo.content }</span>
                    </div>
                )
            })
        ) : (
            <p className="center">You do not have a todo's left, Yah!</p>
        )
    

    return (
        <div className="todos collection">
            { todoList }
        </div>
    )
}

export default Todos