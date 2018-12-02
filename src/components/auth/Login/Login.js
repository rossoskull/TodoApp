import React, { Component, Fragment } from 'react'
import { Typography, Button, Card, CardContent } from '@material-ui/core';
import pallette from '../../layout/pallette'
import { connect } from 'react-redux'
import { loginUser, resetLoginLoadstate } from '../../../store/actions/userActions'
import { Redirect } from 'react-router-dom'
import './Login.css'
import Loader from '../../layout/Loader/Loader';

class Login extends Component {
    state = {
        'email': '',
        'password': '',
        'loading': false
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({loading: true})
        const { email, password } = this.state
        this.props.loginUser({email, password})
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        
        if ( !this.props.firebase.auth.isEmpty ) { return <Redirect to="/TodoApp/display" /> }
        
        if ( this.props.loaded === false && this.state.loading === true ) {
            this.setState({loading: false})
            this.props.reset()
        }

        document.title = 'Login \u00B7 TodoApp'

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
                <Loader loading={this.state.loading} />
            </Fragment>
        )
    }
}

const mapDispathToComponent = dispatch => {
    return {
        loginUser: user => dispatch(loginUser(user)),
        reset: () => dispatch(resetLoginLoadstate())
    }
}

const mapStateToProps = state => {
    return {
        firebase: state.firebase,
        authError: state.user.authError,
        loaded: state.user.loaded
    }
}

export default connect(mapStateToProps, mapDispathToComponent)(Login)