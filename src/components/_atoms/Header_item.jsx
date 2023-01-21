import React from 'react';

const header_item = ({ link, text }) => {
  return (
    <li className='Header__Item'>
      <a href={link}>{text}</a>
    </li>
  );
};

export default header_item;
