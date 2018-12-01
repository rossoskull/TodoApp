import React, { Component, Fragment } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import Login from './components/auth/Login/Login'
import Signup from './components/auth/Signup/Signup'
import CreateTodo from './components/todos/CreateTodo/CreateTodo'
import DisplayTodo from './components/todos/DisplayTodo/DisplayTodo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <div className='container main-body'>
            <Switch>
              <Route exact path='/TodoApp/signup' render={() => {return (<Signup />)}}></Route>
              <Route exact path='/TodoApp/create' render={() => {return (<CreateTodo />)}}></Route>
              <Route exact path='/TodoApp/display' render={() => {return (<DisplayTodo />)}}></Route>
              <Route exact path='/TodoApp/' render={() => {return (<Login />)}}></Route>
            </Switch>
            <Footer />
          </div>          
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App;
