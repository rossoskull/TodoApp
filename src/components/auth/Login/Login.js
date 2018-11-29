import React, { Component, Fragment } from 'react'
import { Typography, TextField, Button } from '@material-ui/core';
import pallette from '../../layout/pallette'
import { connect } from 'react-redux'
import { loginUser } from '../../../store/actions/userActions'

class Login extends Component {
    state = {
        'email': '',
        'password': ''
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.loginUser(this.state)
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return(
            <Fragment>
                <Typography variant='h3'>
                    Log In
                </Typography>
                <form onSubmit={this.handleSubmit} name='loginForm'>
                    <TextField type='text' label='Email ID' id='email' onChange={this.handleChange}></TextField><br />
                    <TextField type='password' label='Password' id='password' onChange={this.handleChange}></TextField><br />
                    <Button type='submit' style={{backgroundColor: pallette.jadeGreen }} >
                        Submit
                    </Button>
                </form>
            </Fragment>
        )
    }
}

const mapDispathToComponent = dispatch => {
    return {
        loginUser: user => dispatch(loginUser(user))
    }
}

export default connect(null, mapDispathToComponent)(Login)