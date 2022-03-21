import React from 'react'
import {Navbar, Nav} from "react-bootstrap"
import { Link, useHistory } from 'react-router-dom'
import "./Header.css"

function Header() {

  const history = useHistory()

  const handleLogout = () => {
		sessionStorage.removeItem("access_token");
    localStorage.removeItem("zenClass");
		history.push("/")
	};
  return (
    <div>
     <Navbar collapseOnSelect bg="primary" variant='dark' expand="md">
         <Navbar.Text style={{marginLeft:"20px"}}>
            <h3 className='text-white'>Zen Class</h3> 
         </Navbar.Text>
         <Navbar.Toggle aria-controls = "basic-navbar-nav" />
             <Navbar.Collapse id='basic-navbar-nav'>
                 <Nav className='pr-5' style={{marginLeft : "auto"}}>
  
                   <Link className='navbar-link' to='/dashboard'>Dashboard</Link>
               
                   <Link className='navbar-link' to='/tickets-list'>Tickets</Link>          
                     
                     <Link className='navbar-link' to='/' onClick={handleLogout}>Logout</Link>
                 </Nav>
             </Navbar.Collapse>
         
     </Navbar>

    </div>
  )
}

export default Header
