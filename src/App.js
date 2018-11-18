import React, { Component, Fragment } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/layout/Header/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App;
