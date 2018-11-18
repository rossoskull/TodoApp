import React, { Component, Fragment } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/layout/Header/Header'
import Login from './components/auth/Login/Login'
import Signup from './components/auth/Signup/Signup'
import CreateTodo from './components/todos/CreateTodo/CreateTodo'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <div className='container main-body'>
            <Switch>
              <Route exact path='/' render={() => {return (<Login />)}}></Route>
              <Route exact path='/signup' render={() => {return (<Signup />)}}></Route>
              <Route exact path='/create' render={() => {return (<CreateTodo />)}}></Route>
            </Switch>
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App;
