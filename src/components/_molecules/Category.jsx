import React from 'react';

const Category = ({ img, section, text }) => {
  return (
    <a className='Aside__Category list-group-item-action' href={section}>
      <figure className='Aside__Category__Image'>
        <img src={img} alt='' />
      </figure>
      <span className='Aside__Category__Text'>{text}</span>
    </a>
  );
};

export default Category;
