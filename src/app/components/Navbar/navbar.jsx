import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Logo on the left */}
      <img src='/assets/logo-black.png' alt='Logo' className='logo' />

      {/* Navigation links */}
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>About</li>
        <li>Sign in</li>
      </ul>

      {/* Search bar in the middle */}
      <div className='search-box'>
        <input type='text' placeholder='Search here' />
        <img src='/assets/search-w.png' alt='Search' />
      </div>

      {/* Toggle icon on the right */}
      <img src='/assets/night.png' alt='Toggle Theme' className='toggle-icon' />
    </div>
  );
};

export default Navbar;
