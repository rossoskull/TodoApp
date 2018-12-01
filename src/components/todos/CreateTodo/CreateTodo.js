import React, { Component, Fragment } from 'react'
import { Typography, Card, CardContent, Button } from '@material-ui/core'
import pallette from '../../layout/pallette'
import { connect } from 'react-redux'
import { createTodo } from '../../../store/actions/todoActions'
import { Redirect } from 'react-router-dom'

class CreateTodo extends Component {

    state = {
        title: '',
        author: '',
        body: '',
        status: 0
    }

    handleSubmit = e => {
        e.preventDefault()
        let state = this.state
        state.author = this.props.profile.fname + ' ' + this.props.profile.lname
        state.authId = this.props.auth.uid
        this.props.createTodo(state)
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
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
}

const mapActionToDispatch = dispatch => {
    return {
        createTodo: todo => dispatch(createTodo(todo))
    }
}

export default connect(mapStateToProps, mapActionToDispatch)(CreateTodo)