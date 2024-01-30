import React from 'react'
import "../styling/Navbar.css"

function Navbar() {
  return (
    
    <>
      <nav className="header">
    <h1 className="logo">Portfolio</h1>
    <input type="checkbox" id="click" />
    <label htmlFor="click" className="menu-btn">
      <i className="fas fa-bars" />
    </label>
    <ul className="nav-links">
      <li>
        <a href="/" className="link">
          HOME
        </a>
      </li>
      <li>
        <a href="#aboutme" className="link about-header">
          ABOUT
        </a>
      </li>
      <li>
        <a href="#projects" className="link projects-header">
          PROJECTs
        </a>
      </li>
      <li>
        <a href="#projects" className="link skills">
          TECH
        </a>
      </li>
      <li>
        <a href="#footer" className="link footer1">
          Contact
        </a>
      </li>
    </ul>
  </nav>
    </>
  )
}

export default Navbar