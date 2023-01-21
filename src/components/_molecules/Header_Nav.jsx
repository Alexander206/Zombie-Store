import React from 'react';

import HEADER_ITEM from '../_atoms/Header_item.jsx';

const Header_nav = ({ stateNav, setStateNav }) => {
  let classChange = false;

  const handlerNav = () => {
    setStateNav(!stateNav);
  };

  stateNav ? (classChange = 'Header__Nav full-screan') : (classChange = 'Header__Nav');

  return (
    <nav className={classChange}>
      <button className='btn-clouse' onClick={handlerNav}>
        <ion-icon name='close-circle'></ion-icon>
      </button>
      <ul className='Header__List'>
        <HEADER_ITEM link='/' text='Home' />
        <HEADER_ITEM link='/' text='Comida' />
        <HEADER_ITEM link='/' text='Lugares' />
        <HEADER_ITEM link='/' text='Objetos' />
        <HEADER_ITEM link='/' text='Acerca de' />
      </ul>
    </nav>
  );
};

export default Header_nav;
