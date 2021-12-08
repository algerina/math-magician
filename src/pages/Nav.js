import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <nav className="navbar">
    <ul className="navList">
      <li><h1>Math Magiciens</h1></li>
      <li><Link to="/MainPage">Home</Link></li>
      <li className="space">space</li>
      <li><Link to="/Calcul">Calculator</Link></li>
      <li className="space">space</li>
      <li><Link to="/Quote">Quote</Link></li>
    </ul>
  </nav>
);

export default Nav;
