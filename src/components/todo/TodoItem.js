import React from 'react'
import { Checkbox, Flex, Text, IconButton } from "@chakra-ui/core"
import { DeleteIcon } from '@chakra-ui/icons'

function TodoItem({ index, todo, toggleComplete, deleteTodo }) {
    return (
        <Flex className="todo-item-containter">
            <Checkbox className="todo-item-checkbox"
                colorScheme="blue"
                defaultIsChecked={todo.completed}
                onChange={() => toggleComplete(todo.id, index)}
            />

            <Text className="todo-item-text"
                as={todo.completed ? "s" : ""}
                textColor={todo.completed ? "grey" : "black"}
            >
                {todo.title}
            </Text>
            <IconButton className="todo-item-delete"
                colorScheme="red"
                size="sm"
                variant="link"
                onClick={() => deleteTodo(todo.id, index)}
                icon={<DeleteIcon />}
            />
        </Flex>
    )
}

export default TodoItem
