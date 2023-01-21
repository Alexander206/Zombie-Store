import React from 'react';

const Header_Logo = ({ logo }) => {
  return (
    <a className='Logo' href='/'>
      <figure className='Logo__Figure'>
        <img src={logo} alt='' />
      </figure>
      <h2 className='Logo__Text'>
        Zombie <span>STORE</span>
      </h2>
    </a>
  );
};

export default Header_Logo;
