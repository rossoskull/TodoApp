import React, { Fragment } from 'react'
import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../../../store/actions/userActions'
import { connect } from 'react-redux'

const LoggedInButtons = ({styles, logout}) => {
    return (
        <Fragment>
            <Button component={NavLink} to='/create' style={styles.buttons}>Create Todo</Button>
            <Button component={NavLink} to='/display' style={styles.buttons}>Display</Button>
            <Button style={styles.buttons} onClick={logout}>Log Out</Button>
        </Fragment>
    )
}

const mapActionToProps = dispatch => {
    return {
        logout: () => dispatch(logoutUser())
    }
}

export default connect(null, mapActionToProps)(LoggedInButtons)