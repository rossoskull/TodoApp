import React, { Component } from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Card, Typography, CardContent, CardActions, Button } from '@material-ui/core'
import { deleteTodo, updateTodo } from '../../../store/actions/todoActions'
import { Redirect } from 'react-router-dom'
import Loader from '../../layout/Loader/Loader'

class DisplayTodo extends Component {
    render() {
        let { todos, auth } = this.props

        if ( auth.isEmpty ) {
            return (<Redirect to="/TodoApp/" />)
        }

        const colorCode = {
            0: 'rgb(255, 255, 128)',
            1: 'rgb(191, 255, 128)',
            2: 'rgb(255, 153, 102)'
        }

        if ( todos ) {
            todos = todos.filter(t => {
                return (t.authId === auth.uid)
            })
        }
        
        return(
            <div className='todos'>
                <Typography variant='display1' align='center'>
                    Your Todos
                </Typography>
                {(todos && todos.length !== 0) ? (todos.map(t => {
                    return(
                        <Card
                            key={t.id}
                            style={{
                                marginBottom: '10px',
                                backgroundColor: colorCode[t.status]
                            }}
                          >
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
                            </CardContent>
                            <CardActions>
                                <Button
                                    style={{
                                        backgroundColor: '#33cc33',
                                        color: 'white'
                                    }}
                                    onClick={() => {this.props.updateTodo({id: t.id, status: 1})}}
                                >
                                    Done!
                                </Button>

                                <Button
                                    style={{
                                        backgroundColor: '#ff6600',
                                        color: 'white'
                                    }}
                                    onClick={() => {this.props.updateTodo({id: t.id, status: 2})}}
                                >
                                    Not Done
                                </Button>

                                <Button
                                    style={{
                                        backgroundColor: '#ff3333',
                                        color: 'white'
                                    }}
                                    onClick={() => {this.props.deleteTodo(t.id)}}
                                >
                                    Delete
                                </Button>

                            </CardActions>
                        </Card>
                    )
                })) : (todos) ? (
                    <div className='center'>
                        <Typography variant='display2' align='center'>
                            Start by creating some todos!
                        </Typography>
                    </div>
                ) : (
                    <div className='center'>
                        <Typography variant='display1' align='center'>
                            Fetching Todos
                        </Typography>
                    </div>
                )}
                <Loader loading={!todos}/>
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
        deleteTodo: id => dispatch(deleteTodo(id)),
        updateTodo: id => dispatch(updateTodo(id))
    }
}

export default compose(
    connect(mapDispatchToAction, mapActionToState),
    firestoreConnect([{ collection: 'todos' }])
)(DisplayTodo)