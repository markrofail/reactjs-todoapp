import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
    IconButton,
    Input,
    Box,
    Flex
} from "@chakra-ui/core"
import { AddIcon} from '@chakra-ui/icons'

export class NewTodoForm extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        // prevent default submit behaviour
        e.preventDefault();

        // create new todo objects
        this.props.createTodo(this.state.title);

        // clear input
        this.setState({ title: '' });
    }

    render() {
        return (
            <Flex as="form" marginTop="-30px" marginBottom="1em">
                <Box width="100% "       align="center"
>
                    <Input
                        name="title"
                        type="text"
                        width="60% "   
                        placeholder="Add Todo ..."
                        borderRadius="25px"
                        value={this.state.title}
                        onChange={this.onChange}
                        shadow="md"
                    />
                    <IconButton
                        variant="link"
                        onClick={this.onSubmit}
                        style={submitButtonStyle}
                        icon={<AddIcon/>}
                    />
                </Box>
            </Flex>
        )
    }
}

// PropTypes
NewTodoForm.propTypes = {
    createTodo: PropTypes.func.isRequired
}

const submitButtonStyle = {
    marginLeft: "-40px",
    outline: "0",
    color: "#0059ff",
    zIndex:"9"
}

export default NewTodoForm
