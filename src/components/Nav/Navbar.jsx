import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='navContainer'>
        <h1>MATEO</h1>
        <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#project">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
        </ul>
    </div>
  )
}
