import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Checkbox, Flex, Text, IconButton } from "@chakra-ui/core"
import { DeleteIcon } from '@chakra-ui/icons'

export class TodoItem extends Component {
    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <Flex className="todo-item-containter">
                <Checkbox className="todo-item-checkbox"
                    colorScheme="blue"
                    defaultIsChecked={completed}
                    onChange={this.props.toggleComplete.bind(this, id)} />
                <Text className="todo-item-text"
                    as={completed ? "s" : ""}
                    textColor={completed ? "grey" : "black"}>
                    {title}
                </Text>
                <IconButton className="todo-item-delete"
                    colorScheme="red"
                    size="sm"
                    variant="link"
                    onClick={this.props.deleteTodo.bind(this, id)}
                    icon={<DeleteIcon />} />
            </Flex>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default TodoItem
