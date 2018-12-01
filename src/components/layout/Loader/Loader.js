import React, { Component, Fragment } from 'react'
import { CircularProgress } from '@material-ui/core' 
import './Loader.css'
import pallette from '../pallette'

class Loader extends Component {
  render() {
    return (
      <Fragment>
        { this.props.loading && (
          <Fragment>
            <div className='bl-bg'></div>
            <div className='circle-progress'><CircularProgress size='75px' style={{color: pallette.kellyGreen}} /></div>
          </Fragment>
        )}        
      </Fragment>
    )
  }
}

export default Loader