import React, { Component, Fragment } from 'react'
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core'
import pallette from '../../layout/pallette'
import { signUp } from '../../../store/actions/userActions'

class Signup extends Component {

    state = {
        fname: '',
        lname: '',
        email: '',
        password: ''
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.signUp(this.state)
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {

        if ( !this.props.firebase.auth.isEmpty ) {
            return (<Redirect to="/kuizu/display" />)
        }

        return(
            <Fragment>
                <Typography variant='display1'>
                    Signup
                </Typography>
                <form onSubmit={this.handleSubmit} name='loginForm'>
                    <TextField type='text' label='First Name' id='fname' onChange={this.handleChange}></TextField><br />
                    <TextField type='text' label='Last Name' id='lname' onChange={this.handleChange}></TextField><br />
                    <TextField type='text' label='Email ID' id='email' onChange={this.handleChange}></TextField><br />
                    <TextField type='password' label='Password' id='password' onChange={this.handleChange}></TextField><br />
                    <Button type='submit' style={{backgroundColor: pallette.jadeGreen, color: 'white'}} >
                        Sign Up
                    </Button>
                    <p style={{textAlign: 'center', color: 'red'}} >
                        {(this.props.authError) ? this.props.authError.message : null}
                    </p>
                </form>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        firebase: state.firebase,
        authError: state.user.authError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: user => dispatch(signUp(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)