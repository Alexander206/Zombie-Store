import React from 'react';

const header_item = ({ link, text, home, setHome, stateNav, setStateNav }) => {
  const handlerNav = () => {
    setStateNav(!stateNav);
  };

  const handlerHome = (tipeBtn) => {
    tipeBtn === 'Home' ? setHome(true) : setHome(false);
    handlerNav();
    console.log(home);
  };

  return (
    <li className='Header__Item' onClick={() => handlerHome(text)}>
      <a href={link}>{text}</a>
    </li>
  );
};

export default header_item;
