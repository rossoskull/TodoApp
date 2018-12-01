import React, { Component, Fragment } from 'react'
import { Typography, CardContent, Card } from '@material-ui/core'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button } from '@material-ui/core'
import pallette from '../../layout/pallette'
import { signUp, resetSignupLoadstate } from '../../../store/actions/userActions'
import './Signup.css'
import Loader from '../../layout/Loader/Loader';

class Signup extends Component {

    state = {
        fname: '',
        lname: '',
        email: '',
        password: '',
        loading: false
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({loading: true})
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

        if ( this.props.loaded === false && this.state.loading === true ) {
            this.setState({loading: false})
            this.props.reset()
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
                <Loader loading={this.state.loading} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        firebase: state.firebase,
        authError: state.signup.authError,
        loaded: state.signup.loaded
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: user => dispatch(signUp(user)),
        reset: () => dispatch(resetSignupLoadstate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)