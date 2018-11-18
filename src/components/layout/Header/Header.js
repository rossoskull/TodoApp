import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Header = () => {
    return(
        <AppBar>
            <Toolbar>
                <Typography variant='display1' color='inherit'>
                    React Todo App
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header