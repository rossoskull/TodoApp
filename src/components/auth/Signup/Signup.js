import React, { Component, Fragment } from 'react'
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Signup extends Component {

    render() {

        if ( !this.props.firebase.auth.isEmpty ) {
            return (<Redirect to="display" />)
        }

        return(
            <Fragment>
                <Typography variant='h3'>
                    Signup
                </Typography>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        firebase: state.firebase
    }
}

export default connect(mapStateToProps)(Signup)