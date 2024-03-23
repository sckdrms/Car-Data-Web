// NavbarComponents.jsx
import React from 'react';
// import { Link } from 'react-router-dom'; // react-router-dom에서 Link를 임포트합니다
import '../css/Navbar.css';
import logo from '../img/logo-1280x720.png';

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} className='logo' alt="logo" />
      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>System</li>
        <li>Introduce</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
