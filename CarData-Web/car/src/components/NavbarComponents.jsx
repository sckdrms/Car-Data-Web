import React from 'react'
import '../css/Navbar.css'
import logo from '../img/logo-1280x720.png'

const Navbar = ()=>{
  return(
    <nav className='container'>
      <img src={logo} className='logo' alt="" />
      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>System</li>
        <li>introduce</li>
        <li>Contect us</li>
      </ul>
    </nav>
  )
}
export default Navbar