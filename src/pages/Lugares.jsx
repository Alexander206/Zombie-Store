import React from 'react';

/* Componentes */
import CARD from '../components/bootstrap/Card';

/* Variables */
import charapter from '../assets/img/LugaresCharapter.svg';
import DataBase from '../_data/database.json';
//const imagenes = require.context('../assets/comida', true);
let Data = DataBase[0].Lugares;

const Lugares = ({ list, setaList }) => {
  let products = Data.map((item, i) => (
    <CARD
      key={i}
      category='Lugares'
      title={item.name}
      //img={imagenes(`./${item.img}`)}
      text={item.description}
      price={item.price}
      list={list}
      setaList={setaList}
    />
  ));

  return (
    <article id='list'>
      <h2 className='Title'>Lugares</h2>

      <p className='Paragraph'>
        ¡Explora los rincones más peligrosos del mundo post-apocalíptico con nuestra sección de lugares! En nuestra página, te
        llevaremos a través de una variedad de lugares únicos, desde ciudades en ruinas hasta refugios subterráneos y zonas
        radioactivas.
      </p>

      <figure className='Figure_Category'>
        <img src={charapter} alt='' />
      </figure>

      <p className='Paragraph'>
        Cada lugar tiene su propia historia y desafíos, y te proporcionaremos toda la información necesaria para prepararte para
        tu viaje. Además, te ofreceremos consejos y recomendaciones para sobrevivir en estos lugares y encontrar los recursos
        valiosos que necesitas.
      </p>

      <p className='Paragraph'>
        <strong>¡Únete a nosotros en nuestra sección de lugares hoy!</strong>
      </p>

      <article className='container_items'>{products}</article>
    </article>
  );
};

export default Lugares;
