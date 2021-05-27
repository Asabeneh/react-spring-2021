import React from 'react'
import {Link, NavLink} from  'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = props => {
    return (
        <ul>
        <li>
          <NavLink to='/' activeClassName="active" exact>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about' activeClassName="active" >About</NavLink>
        </li>
        <li>
          <NavLink to='/courses' activeClassName="active">Courses</NavLink>
        </li>
        <li>
          <NavLink to='/contacts' activeClassName="active">Contacts</NavLink>
        </li>
        <li>
          <NavLink to='/user' activeClassName="active">Current User</NavLink>
        </li>
      </ul>
    )
}

export default Navbar
