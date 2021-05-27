import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Header from './components/Header'
import Footer from './components/Footer'

const Courses = () => {
  return <div>
    <h1>Courses</h1>
    <p>Welcome to the course</p>
  </div>
}


class App extends Component {
  state = {
    isLoggedIn:false
  }

  handleLogIn = () => {
    this.setState({
      isLoggedIn:!this.state.isLoggedIn
    })

  }
  render () {
    return (
      <BrowserRouter>
      <Header />
      <div>
        <button onClick = {this.handleLogIn}>
          {
            this.state.isLoggedIn ? 'Log out' :'Log in'
          }
        </button>
      </div>
    <Switch>
      <Route exact strict  path ="/" component = {Home} />
      <Route path ="/about" component = {About} />
      <Route exact strict path ="/contacts" component = {Contacts} />
      <Route path = '/courses' component = {() => this.state.isLoggedIn ? <Courses  /> : <Redirect to="/" />} />
      <Route component = {() => <h2>Not found</h2>} />
    </Switch>
    <Footer />
    </BrowserRouter>
    
    )
  }
 
}

export default App;
