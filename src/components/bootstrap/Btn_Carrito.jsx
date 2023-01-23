import React from 'react';

import '../../styles/boostrap/Btn_Carrito.scss';

const Btn_Carrito = ({ setHome, setabout, setatienda, list }) => {
  const handlerTienda = () => {
    setHome(false);
    setabout(false);
    setatienda(true);
  };

  return (
    <button type='button' className=' btn-carrito' onClick={handlerTienda}>
      <ion-icon name='cart'></ion-icon>
      <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill'>
        {list.length}
        <span className='visually-hidden'>unread messages</span>
      </span>
    </button>
  );
};

export default Btn_Carrito;
