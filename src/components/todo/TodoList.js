import React from 'react'
import { Stack } from "@chakra-ui/core"

import TodoItem from './TodoItem'

function TodoList({ todos, toggleComplete, deleteTodo }) {
    return (
        <Stack className="todo-list" spacing={4}  >
            {todos.map((todo, index) => {
                return (
                    <TodoItem
                        index={index}
                        todo={todo}
                        key={todo.id}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </Stack>
    )
}

export default TodoList
