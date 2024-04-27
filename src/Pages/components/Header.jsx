import React from 'react';
import './css/header.css';
// import logo from './Design.png'

function Header() {
  return (
    <header class="header">
    <div class="logo">
      <img src="" alt="Logo" />
    </div>
    <div class="title">
      <h1>Blood Donation Awareness</h1>
    </div>
    <nav>
      <ul class="nav-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#donate">Donate</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#know-more">Know More</a></li>
      </ul>
    </nav>
  </header>
  );
}

export default Header;
