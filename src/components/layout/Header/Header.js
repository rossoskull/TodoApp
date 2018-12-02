import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import LoggedInButtons from './LoggedInButtons'
import LoggedOutButtons from './LoggedOutButtons'
import pallette from '../pallette'
import { connect } from 'react-redux'
import title from '../../../img/white_over_green.png'

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
                    <img src={title} alt='TodoApp Logo' height='50px' />
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