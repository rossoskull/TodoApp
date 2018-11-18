import React, { Fragment } from 'react'
import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const LoggedInButtons = ({styles}) => {
    return (
        <Fragment>
            <Button component={NavLink} to='/create' style={styles.buttons}>Create Todo</Button>
            <Button component={NavLink} to='/display' style={styles.buttons}>Display</Button>
            <Button style={styles.buttons}>Log Out</Button>
        </Fragment>
    )
}

export default LoggedInButtons