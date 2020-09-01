import React, { Component } from 'react';
import { TodoItem } from './TodoItem'
import PropTypes from 'prop-types';
import { Stack } from "@chakra-ui/core"

class TodoList extends Component {
    render() {
        const { todos } = this.props;
        return (<Stack spacing={4} paddingLeft="10%" width="90%" >
            {todos.map((todo) => {
                return <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={this.props.toggleComplete}
                    deleteTodo={this.props.deleteTodo}
                />
            })}
        </Stack>
        )
    }
}

// PropTypes
TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default TodoList;
