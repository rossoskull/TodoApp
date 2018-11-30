import React, { Component, Fragment } from 'react'
import { Typography, TextField, Button } from '@material-ui/core'
import pallette from '../../layout/pallette'
import { connect } from 'react-redux'
import { createTodo } from '../../../store/actions/todoActions'
import { Redirect } from 'react-router-dom'

class CreateTodo extends Component {

    state = {
        title: '',
        author: 'Jay Mistry',
        body: '',
        status: 0
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.createTodo(this.state)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        if ( this.props.auth.isEmpty ) {
            return <Redirect to='/' />
        }

        return(
            <Fragment>
                <Typography variant='h3'>
                    Create Todo
                </Typography>
                <form name='addtodo' onSubmit={this.handleSubmit}>
                    <TextField name='title' label='Title' onChange={this.handleChange} /><br />
                    <TextField name='author' label='Author' onChange={this.handleChange} /><br />
                    <TextField name='body' type='textarea' label='Body' onChange={this.handleChange} /><br />
                    <Button type='submit' style={{backgroundColor: pallette.jadeGreen }} >
                        Create
                    </Button>
                </form>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

const mapActionToDispatch = dispatch => {
    return {
        createTodo: todo => dispatch(createTodo(todo))
    }
}

export default connect(mapStateToProps, mapActionToDispatch)(CreateTodo)