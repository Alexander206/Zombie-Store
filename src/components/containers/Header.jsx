/* Dependencias */
import React, { useState } from 'react';

/* Estilos */
import '../../styles/containers/Header.scss';

/* Molecules */
import HEADER_LOGO from '../_molecules/Header_Logo.jsx';
import HEADER_NAV from '../_molecules/Header_Nav.jsx';

/* Variables */
import logo from '../../assets/icons/Logo.svg';

const Header = ({ home, setHome, about, setabout, setatienda }) => {
  const [stateNav, setStateNav] = useState(false);

  const handlerNav = () => {
    setStateNav(!stateNav);
  };

  return (
    <header className='Header'>
      <HEADER_LOGO logo={logo} />

      <HEADER_NAV
        stateNav={stateNav}
        setStateNav={setStateNav}
        home={home}
        setHome={setHome}
        about={about}
        setabout={setabout}
        setatienda={setatienda}
      />

      <button className='btn-header' onClick={handlerNav}>
        <ion-icon name='menu'></ion-icon>
      </button>
    </header>
  );
};

export default Header;
