import React, { Component, Fragment } from 'react'
import { Typography, CardContent, Card } from '@material-ui/core'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button } from '@material-ui/core'
import pallette from '../../layout/pallette'
import { signUp } from '../../../store/actions/userActions'
import './Signup.css'

class Signup extends Component {

    state = {
        fname: '',
        lname: '',
        email: '',
        password: ''
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.props.signUp(this.state)
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {

        if ( !this.props.firebase.auth.isEmpty ) {
            return (<Redirect to="/TodoApp/display" />)
        }

        return(
            <Fragment>
                <form onSubmit={this.handleSubmit} name='loginForm'>
                    <Card className='form-card-signup'>
                        <CardContent>
                            <Typography variant='display1' align='center'>
                                Sign Up
                            </Typography>
                        
                            <input type='text' placeholder='First Name' id='fname' onChange={this.handleChange} /><br />
                            <input type='text' placeholder='Last Name' id='lname' onChange={this.handleChange} /><br />
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