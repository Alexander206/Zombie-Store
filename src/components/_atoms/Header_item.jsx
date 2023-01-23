import React from 'react';

const header_item = ({ link, text, home, setHome, stateNav, setStateNav, about, setabout, setatienda }) => {
  const handlerBtn = (tipeBtn) => {
    if (tipeBtn === 'Home') {
      setHome(true);
      setabout(false);
      setStateNav(false);
      setatienda(false);
    } else if (tipeBtn === 'Acerca de') {
      setHome(false);
      setabout(true);
      setStateNav(false);
      setatienda(false);
    } else {
      setHome(false);
      setabout(false);
      setStateNav(false);
      setatienda(false);
    }
  };

  return (
    <li className='Header__Item' onClick={() => handlerBtn(text)}>
      <a href={link}>{text}</a>
    </li>
  );
};

export default header_item;
