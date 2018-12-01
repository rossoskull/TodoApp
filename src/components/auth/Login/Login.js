import React, { Component, Fragment } from 'react'
import { Typography, Button, Card, CardContent } from '@material-ui/core';
import pallette from '../../layout/pallette'
import { connect } from 'react-redux'
import { loginUser } from '../../../store/actions/userActions'
import { Redirect } from 'react-router-dom'
import './Login.css'

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
        
        if ( !this.props.firebase.auth.isEmpty ) { return <Redirect to="/kuizu/display" /> }

        return(
            <Fragment>
                <form onSubmit={this.handleSubmit} name='loginForm'>
                    <Card className='form-card'>
                        <CardContent>
                            <Typography variant='display1' align='center'>
                                Log In
                            </Typography>                    
                            <input type='email' placeholder='Email ID' id='email' onChange={this.handleChange} /><br />
                            <input type='password' placeholder='Password' id='password' onChange={this.handleChange} /><br />
                            <p style={{textAlign: 'center', color: 'red'}} >
                                {(this.props.authError) ? this.props.authError.message : null}
                            </p>
                            <Button
                                type='submit'
                                id='submit-button'
                                style={{
                                    backgroundColor: pallette.jadeGreen,
                                    margin: 'auto',
                                    color: 'white',
                                    width: '125px'
                                }}>
                                Submit
                            </Button>
                        </CardContent>                   
                    </Card>
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

const mapStateToProps = state => {
    return {
        firebase: state.firebase,
        authError: state.user.authError
    }
}

export default connect(mapStateToProps, mapDispathToComponent)(Login)