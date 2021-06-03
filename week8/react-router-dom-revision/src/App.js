import logo from './logo.svg';
import {useState} from 'react'
import {BrowserRouter, Route, Switch, Redirect, Prompt, withRouter} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Courses from './components/Courses'
import Navbar from './components/Navbar'
import './App.scss';
import {Button} from 'reactstrap'
import Header from './components/Header';
import Moment from 'react-moment';
import Loader from './components/Loader';



const  App = ()  => {
  const [isLoggedIn, setLogging] = useState(false)

  const handleLogIn= () => {
    setLogging(!isLoggedIn)
  }

  return (
   <BrowserRouter>
   <div>
     <p>I love <span>JavaScript</span></p>
   </div>
   <Loader />
    <Moment format="DD/MM/YYYY HH:mm">
                1976-04-19T12:59-0500
            </Moment>
          <br />
    <Moment date={'1976-04-19T12:59-0500'}  fromNow />
    <Prompt when = {!isLoggedIn} message =  {(location) => {
              if(location.pathname.startsWith('/courses')){
                  return "You reached a perimuim sections"
              }
                    
          }} / >
 
    <Header />
    <Button onClick= {handleLogIn} color='primary'>
    {
      isLoggedIn ? 'Log Out' : 'Log In'
    }
   
    </Button>
    <button className='btn btn-danger'>Danger Button</button>
    <button className='btn btn-success'>Success Button</button>
    <button className='btn btn-info'>Info Button</button>
    <div>
    <Button color='danger'>Danger</Button>
    </div>
   
    <Button color='warning'>Warning</Button>{' '}
    <Button color='success'>Success</Button> {' '}
    <Button color='info'>Info</Button> 
     <Switch>
       
     <Route exact path = '/' component = {Home} />
     <Route exact path = '/about' component = {About} />
     <Route exact path = '/contacts' component = {Contacts} />
     <Route  path = '/courses' component = {
       (props) => 
       isLoggedIn ? <Courses {...props} /> : <Redirect to ='/' />
       
       } />
     {/* <Route component = {() => <h1>Not found</h1>} /> */}
     </Switch>

   </BrowserRouter>
  )
}

export default App
