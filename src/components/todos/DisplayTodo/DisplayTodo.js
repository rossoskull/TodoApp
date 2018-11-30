import React, { Component } from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Card, Typography, CardContent, Button } from '@material-ui/core'
import { deleteTodo } from '../../../store/actions/todoActions'
import { Redirect } from 'react-router-dom'

class DisplayTodo extends Component {
    render() {
        const { todos, auth } = this.props

        if ( auth.isEmpty ) {
            return (<Redirect to="/" />)
        }

        return(
            <div className='todos'>
                <Typography variant='display1'>
                    Todos
                </Typography>
                {todos && todos.map(t => {
                    return(
                        <Card key={t.id} style={{marginBottom: '10px'}}>
                            <CardContent>
                                <Typography variant='h5'>
                                    {t.title}
                                </Typography>
                                <Typography variant='body2'>
                                    {t.author}
                                </Typography>
                                <Typography variant='body1'>
                                    {t.body}
                                </Typography>
                                <Button onClick={() => {this.props.deleteTodo(t.id)}} >Delete</Button>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        )
    }
}

const mapDispatchToAction = state => {
    return {
        todos: state.firestore.ordered.todos,
        auth: state.firebase.auth
    }
}

const mapActionToState = dispatch => {
    return {
        deleteTodo: id => dispatch(deleteTodo(id))
    }
}

export default compose(
    connect(mapDispatchToAction, mapActionToState),
    firestoreConnect([{ collection: 'todos' }])
)(DisplayTodo)