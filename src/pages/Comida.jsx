import React from 'react';
import { Toaster } from 'react-hot-toast';

/* Componentes */

import CARD from '../components/bootstrap/Card';

/* Variables */
import charapter from '../assets/img/ComidaCharapter.svg';
import dataBase from '../_data/database.json';
const imagenes = require.context('../assets/comida', true);

let data = dataBase[0].Comida;

const Comida = ({ list, setaList }) => {
  let products = data.map((item, i) => (
    <CARD
      key={i}
      category='Comida'
      title={item.name}
      img={imagenes(`./${item.img}`)}
      text={item.description}
      price={item.price}
      list={list}
      setaList={setaList}
    />
  ));

  return (
    <article id='list'>
      <h2 className='Title'>Comida</h2>

      <p className='Paragraph'>
        ¡Bienvenidos al mundo de la comida post apocalíptica! Aunque la vida después del fin del mundo puede parecer difícil, en
        nuestro restaurante encontrarás una gran variedad de opciones deliciosas que te ayudarán a sobrevivir y prosperar.
      </p>

      <figure className='Figure_Category'>
        <img src={charapter} alt='' />
      </figure>

      <p className='Paragraph'>
        <strong>¡Ven a visitarnos hoy y experimenta la emoción de la comida post apocalíptica!</strong>
      </p>

      <article className='container_items'>{products}</article>

      <Toaster position='bottom-right' reverseOrder={false} />
    </article>
  );
};

export default Comida;
