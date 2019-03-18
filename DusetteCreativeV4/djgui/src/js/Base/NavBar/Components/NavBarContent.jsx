import React from 'react';
import { Link } from 'react-router-dom';


export const NavBarContent = () => (
  <nav className="navbar-wrapper">
    <Link to={{ pathname: '/' }}>Home</Link>
    <Link to={{ pathname: '/about' }}>About</Link>
  </nav>
)