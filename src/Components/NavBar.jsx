import React from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'
function NavBar() {
  const Navigate=useNavigate()
  return (
    <div>
         <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src="https://roops.co.uk/cdn/shop/collections/kalki_logo.png?v=1678014368" alt="KALKI-FASHION" className="logo-image" />
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/Women" className="nav-link">WOMEN</a>
          </li>
          <li className="nav-item">
            <a href="/Men" className="nav-link">MEN</a>
          </li>
          <li className="nav-item">
            <a href="/Women" className="nav-link">BRIDAL</a>
          </li>
          <li className="nav-item">
            <a href="/Kids" className="nav-link">KIDS</a>
          </li>
        </ul>
        <div>
        <div className='cart'>
      <a href='/Cart'>🛒</a>
      
    </div>
    
        </div>&nbsp;&nbsp;&nbsp;
        <div className='wis'>
      <a href=''>❤️</a>
      
    </div>
        <div className='bt'>
        <button  type="button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark">LOG IN</button>
        &nbsp;&nbsp;&nbsp;<button onClick={()=>Navigate('/Signup')} type="button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark">SIGN UP</button>      </div>
        </div>
    </nav>

    </div>
  )
}

export default NavBar