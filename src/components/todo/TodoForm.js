import React, { useState } from 'react'
import { IconButton, Input, Box, Flex } from "@chakra-ui/core"
import { AddIcon } from '@chakra-ui/icons'

function TodoForm({ createTodo }) {
    const [title, setTitle] = useState("");

    const handleSubmit = e => {
        if (!title) return;

        // create new todo objects
        createTodo(title);

        // clear input
        setTitle('');
    }

    return (
        <Flex as="form" className="todo-form-container">
            <Box className="todo-form">
                <Input className="todo-form-input"
                    width="60%"
                    name="title"
                    type="text"
                    placeholder="Add Todo ..."
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <IconButton className="todo-form-submit"
                    variant="link"
                    onClick={handleSubmit}
                    icon={< AddIcon />} />
            </Box>
        </Flex>
    )
}

export default TodoForm
