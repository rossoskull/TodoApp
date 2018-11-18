import React, { Component } from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Card, Typography, CardContent } from '@material-ui/core';

class DisplayTodo extends Component {
    render() {
        console.log(this.props.todos)
        const { todos } = this.props
        return(
            <div className='todos'>
                <Typography variant='display1'>
                    Todos
                </Typography>
                {todos && todos.map(t => {
                    return(
                        <Card style={{marginBottom: '10px'}}>
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
                        </Card>
                    )
                })}
            </div>
        )
    }
}

const mapDispatchToAction = state => {
    return {
        todos: state.firestore.ordered.todos
    }
}

export default compose(
    connect(mapDispatchToAction),
    firestoreConnect([{ collection: 'todos' }])
)(DisplayTodo)