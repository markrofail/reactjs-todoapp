import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { IconButton, Input, Box, Flex} from "@chakra-ui/core"
import { AddIcon } from '@chakra-ui/icons'

export class TodoForm extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        // create new todo objects
        this.props.createTodo(this.state.title);

        // clear input
        this.setState({ title: '' });
    }

    render() {
        return (
            <Flex as="form" className="todo-form-container">
                <Box className="todo-form">
                    <Input className="todo-form-input"
                        width= "60%"
                        name="title"
                        type="text"
                        placeholder="Add Todo ..."
                        value={this.state.title}
                        onChange={this.onChange} />
                    <IconButton className="todo-form-submit"
                        variant="link"
                        onClick={this.onSubmit}
                        icon={< AddIcon />} />
                </Box>
            </Flex>
        )
    }
}

// PropTypes
TodoForm.propTypes = {
    createTodo: PropTypes.func.isRequired
}

export default TodoForm;
