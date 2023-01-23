import React from 'react';

import HEADER_ITEM from '../_atoms/Header_item.jsx';

const Header_nav = ({ stateNav, setStateNav, home, setHome }) => {
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
        <HEADER_ITEM link='#' text='Home' stateNav={stateNav} setStateNav={setStateNav} home={home} setHome={setHome} />
        <HEADER_ITEM
          link='#list-item-1'
          stateNav={stateNav}
          setStateNav={setStateNav}
          text='Comida'
          home={home}
          setHome={setHome}
        />
        <HEADER_ITEM
          link='#list-item-2'
          stateNav={stateNav}
          setStateNav={setStateNav}
          text='Lugares'
          home={home}
          setHome={setHome}
        />
        <HEADER_ITEM
          link='#list-item-3'
          stateNav={stateNav}
          setStateNav={setStateNav}
          text='Objetos'
          home={home}
          setHome={setHome}
        />
        <HEADER_ITEM
          link='#list-item-4'
          stateNav={stateNav}
          setStateNav={setStateNav}
          text='Acerca de'
          home={home}
          setHome={setHome}
        />
      </ul>
    </nav>
  );
};

export default Header_nav;
