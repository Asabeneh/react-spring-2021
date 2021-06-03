import React from 'react'
import PropTypes from 'prop-types'
import { Route, NavLink, Switch } from 'react-router-dom'

const HTMLCourse = () => {
    return (
        <div>
            <h1>Introduction to HTML</h1>
            <p>HTML is a build block any website</p>
        </div>
    )
}

const CSSCourse= () => {
    return (
        <div>
            <h1>Introduction to CSS</h1>
            <p>CSS brings all the beauty you can add on a website</p>
        </div>
    )
}

const JSCourse = () => {
    return (
        <div>
            <h1>Introduction to JS</h1>
            <p>Interactivity and dynamic content</p>
        </div>
    )
}


const Courses = (props) => {
    console.log(props)
    console.log(props.match.path)
    return (
        <div>
            <h1>Courses</h1>
            <ul>
               <li> <NavLink to='/courses/html' activeClassName='active'>HTML Course</NavLink></li>
               <li> <NavLink to='/courses/css' activeClassName='active' >CSS Course</NavLink></li>
               <li> <NavLink to='/courses/js' activeClassName='active'>JavaScript Course</NavLink></li>
            </ul>
            <Switch>
            <Route  path = {`${props.match.path}/html`} component = {HTMLCourse}/>
            <Route  path = {`/courses/css`}  component = {CSSCourse}/>
            <Route  path = {`/courses/js`}  component = {JSCourse}/>
            </Switch>
          

            <h2>Welcome to the courses</h2>
        </div>
    )
}

Courses.propTypes = {

}

export default Courses
