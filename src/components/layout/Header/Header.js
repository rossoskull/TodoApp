import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import LoggedInButtons from './LoggedInButtons'
import LoggedOutButtons from './LoggedOutButtons'
import pallette from '../pallette'
const Header = () => {
    const styles = {
        buttons: {
            marginRight: '5px',
            color: 'rgb(230,230,230)',
            fontSize: '17px'
        },
        appbar: {
            backgroundColor: pallette.forestGreen,
        }
    }
    
    return(
        <header>
            <AppBar style={styles.appbar} position='relative'>
                <Toolbar>
                    <Typography variant='display1' color='inherit'>
                        React Todo App
                    </Typography>
                    <div style={{marginLeft: 'auto'}}> 
                        <LoggedOutButtons styles={styles}/>
                        <LoggedInButtons styles={styles}/>
                    </div>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header