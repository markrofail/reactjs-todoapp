import React, { Component } from 'react'
import PropTypes from 'prop-types';

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
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input
                    type="text"
                    name="title"
                    placeholder="Add Todo ..."
                    style={{ flex: '10', padding: '5px' }}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="submit"
                    className="btn"
                    style={{ flex: '1' }}
                />
            </form>
        )
    }
}

// PropTypes
NewTodoForm.propTypes = {
    createTodo: PropTypes.func.isRequired
}

export default NewTodoForm
