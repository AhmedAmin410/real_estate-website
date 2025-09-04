import React from 'react';
import './navbar.css';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Logo on the left */}
      <img src='/assets/logo-black.png' alt='Logo' className='logo' />

      {/* Navigation links */}
      <ul>
        <li>Home</li>
        <li>About</li>
        <signed-in>
          <UserButton />
        </signed-in>
        <signed-out>
          <Link href='/sign-in'>
            <li>Sign in</li>
          </Link>
        </signed-out>
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
