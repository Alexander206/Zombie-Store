import React from 'react';

import { toast } from 'react-hot-toast';

import '../../styles/boostrap/Card.scss';

const Card = ({ category, title, img, text, price, list, setaList }) => {
  const handlerCard = () => {
    toast('¡Se agrego al carrito!', {
      icon: '🤘',
      style: {
        fontSize: '1.6rem',
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });

    setaList([...list, { id: list.length, title, category, price }]);
  };

  return (
    <div className='card text-center mb-3 item'>
      <div className='card-body'>
        <h5 className='card-title Caption'>{category}</h5>
        <h2 className='Title__General'>{title}</h2>
        <figure className='figure'>
          <img src={img} alt='' />
        </figure>
        <p className='card-text Paragraph'>{text}</p>
        <span className='price'>{`$${price}`}</span>
        <br />
        <button type='button' className='btn btn-primary btn-card' id='liveToastBtn' onClick={handlerCard}>
          <ion-icon name='cart'></ion-icon>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Card;
