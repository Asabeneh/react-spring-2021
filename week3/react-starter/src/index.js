import React from 'react'
import ReactDOM from 'react-dom'
import {courses} from './data/courses'
import About from './components/About'
import Header from './components/Header'
import Courses from './components/Courses'
import Footer from './components/Footer'
import Contacts from './components/Contacts'
import Projects from './components/Projects'
import ApplicationForm from './components/ApplicationForm'

import './index.css'
const rootElement = document.getElementById('root')

const styles = {
    color:'white',
    background:'black',
    padding:'25px',
}




const skills = ['HTML', 'CSS','JavaScript']

const Main = () => (
    <main>
       <div className='main-wrapper'>
        <About />
        <Courses {...courses} />
        <Projects {...courses }/>
        <ApplicationForm />
        <Contacts />
       </div>
    </main>
)






ReactDOM.render(
<React.Fragment>
    <Header />
    <Main />
    <Footer />
</React.Fragment>,

rootElement)

