import React from 'react'
import {NavLink} from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
  
  } from 'reactstrap';

const NavBar = () => {
    return (
      
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Portofolio</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className = 'nav-link' to="/" activeClassName='active' exact>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = 'nav-link' to="/about" activeClassName='active' exact>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = 'nav-link' to="/contacts" activeClassName='active' exact>Contacts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = 'nav-link' to="/courses" activeClassName='active' exact>Courses</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
   
    )
}

export default NavBar



      
 
