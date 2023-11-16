import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div>
         <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src="https://roops.co.uk/cdn/shop/collections/kalki_logo.png?v=1678014368" alt="KALKI-FASHION" className="logo-image" />
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">WOMEN</a>
          </li>
          <li className="nav-item">
            <a href="/Bikes" className="nav-link">MEN</a>
          </li>
          <li className="nav-item">
            <a href="/Parts" className="nav-link">BRIDAL</a>
          </li>
          <li className="nav-item">
            <a href="/Experience" className="nav-link">KIDS</a>
          </li>
        </ul>
        <div className="nav-btn-container">
          <a href="/login" className="nav-btn">Log In</a>
          <a href="/signup" className="nav-btn nav-btn-signup">Sign Up</a>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default NavBar