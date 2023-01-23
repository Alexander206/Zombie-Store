import React from 'react';

const Category = ({ img, section, text, home, setHome }) => {
  const handlerHome = (tipeBtn) => {
    tipeBtn === 'Home' ? setHome(true) : setHome(false);
  };

  return (
    <a className='Aside__Category list-group-item-action' href={section} onClick={() => handlerHome(text)}>
      <figure className='Aside__Category__Image'>
        <img src={img} alt='' />
      </figure>
      <span className='Aside__Category__Text'>{text}</span>
    </a>
  );
};

export default Category;
