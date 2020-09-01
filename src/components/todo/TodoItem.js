import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Checkbox, Flex, Text, IconButton } from "@chakra-ui/core"
import { DeleteIcon} from '@chakra-ui/icons'

export class TodoItem extends Component {
    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <Flex alignItems="baseline" shadow="md" padding="1em">
                <Checkbox
                    size="md"
                    flex="1"
                    verticalAlign='middle'
                    colorScheme="blue"
                    defaultIsChecked={completed}
                    onChange={this.props.toggleComplete.bind(this, id)}
                />
                <Text
                    flex="20"
                    mt={4}
                    as={completed ? "s" : ""}
                >{title}</Text>
                <IconButton
                    size="sm"
                    flex="1"
                    colorScheme="red"
                    variant="link"
                    onClick={this.props.deleteTodo.bind(this, id)}
                    icon={ <DeleteIcon/> }
                />
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
