import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import LoggedInButtons from './LoggedInButtons'
import LoggedOutButtons from './LoggedOutButtons'
import pallette from '../pallette'
import { connect } from 'react-redux'

const Header = ({firebase}) => {
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

    const Buttons = (firebase.auth.isEmpty) ? (<LoggedOutButtons styles={styles}/>) : (<LoggedInButtons styles={styles}/>)
    
    return(
        <header>
            <AppBar style={styles.appbar} position='relative'>
                <Toolbar>
                    <Typography variant='display1' color='inherit'>
                        React Todo App
                    </Typography>
                    <div style={{marginLeft: 'auto'}}> 
                    {Buttons}                       
                    </div>
                </Toolbar>
            </AppBar>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        firebase: state.firebase
    }
}

export default connect(mapStateToProps)(Header)