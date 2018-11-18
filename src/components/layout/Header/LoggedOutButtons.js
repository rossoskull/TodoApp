import React, { Fragment } from 'react'
import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const LoggedOutButtons = ({styles}) => {
    return (
        <Fragment>
            <Button component={NavLink} exact to='/' style={styles.buttons}>Log In</Button>
            <Button component={NavLink} to='/signup' style={styles.buttons}>Sign Up</Button>
        </Fragment>
    )
}

export default LoggedOutButtons