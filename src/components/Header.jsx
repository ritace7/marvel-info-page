import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='center'>
      <a href='/'>
        <img src={logo} alt='logo'/>
      </a>
    </header>
  )
}

export default Header