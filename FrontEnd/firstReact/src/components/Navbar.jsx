import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <ul className="navbar">
            
         <li className="element"> 
           <Link to="/">Home</Link>

         </li>
          <li className="element">
            <Link to="/services">Services</Link>
          </li>

           <li className="element">
            <Link to="/about">About</Link>
          </li>
       </ul>
      </nav>
  )
}

export default Navbar