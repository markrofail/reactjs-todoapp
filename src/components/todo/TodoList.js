import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Stack } from "@chakra-ui/core"

import { TodoItem } from './TodoItem'

class TodoList extends Component {
    render() {
        const { todos } = this.props;
        return (<Stack className="todo-list" spacing={4}  >
            {todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo}
                          toggleComplete={this.props.toggleComplete}
                          deleteTodo={this.props.deleteTodo} />
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
