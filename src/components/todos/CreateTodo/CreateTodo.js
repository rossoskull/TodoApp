import React, { Component, Fragment } from 'react'
import { Typography, Card, CardContent, Button } from '@material-ui/core'
import pallette from '../../layout/pallette'
import { connect } from 'react-redux'
import { createTodo, resetCreateTodoLoadState } from '../../../store/actions/todoActions'
import { Redirect } from 'react-router-dom'
import Loader from '../../layout/Loader/Loader';

class CreateTodo extends Component {

    state = {
        title: '',
        body: '',
        status: 0,
        loading: false
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({ loading: true })
        let state = this.state
        state.author = this.props.profile.fname + ' ' + this.props.profile.lname
        state.authId = this.props.auth.uid
        const { title, body, status, author, authId } = this.state
        this.props.createTodo({ title, body, status, author, authId })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        if ( this.props.auth.isEmpty ) {
            return <Redirect to='/TodoApp/' />
        }

        if ( this.props.loaded === false && this.state.loading === true ) {
            this.setState({ loading: false })
            this.props.reset()
        }

        if ( this.props.loaded === true ) {
            this.props.reset()
            return <Redirect to='/TodoApp/display' />
        }

        return(
            <Fragment>
                
                <form name='addtodo' onSubmit={this.handleSubmit}>
                    <Card className='form-card'>
                        <CardContent>
                            <Typography variant='display1' align='center'>
                                Create Todo
                            </Typography>
                            <input name='title' type='text' placeholder='Title' onChange={this.handleChange} /><br />
                            <textarea name='body' placeholder='Body' onChange={this.handleChange} /><br />
                            <Button
                                type='submit'
                                id='submit-button'
                                style={{
                                    backgroundColor: pallette.jadeGreen,
                                    margin: 'auto',
                                    color: 'white',
                                    width: '125px'
                                }}>
                                Create Todo
                            </Button>
                        </CardContent>
                    </Card>
                </form>
                <Loader loading={this.state.loading}/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        loaded: state.todo.loaded
    }
}

const mapActionToDispatch = dispatch => {
    return {
        createTodo: todo => dispatch(createTodo(todo)),
        reset: () => dispatch(resetCreateTodoLoadState())
    }
}

export default connect(mapStateToProps, mapActionToDispatch)(CreateTodo)