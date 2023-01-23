import React from 'react';

/* Componentes */
import CARD from '../components/bootstrap/Card';

/* Variables */
import charapter from '../assets/img/ObjetosCharapter.svg';
import DataBase from '../_data/database.json';
//const imagenes = require.context('../assets/comida', true);

let Data = DataBase[0].Objetos;

const Objetos = () => {
  let products = Data.map((item, i) => (
    <CARD
      key={i}
      category='Objetos'
      title={item.name}
      //img={imagenes(`./${item.img}`)}
      text={item.description}
      price={item.price}
    />
  ));

  return (
    <article id='list-item-3'>
      <h2 className='Title'>Objetos</h2>

      <p className='Paragraph'>
        Equípate para sobrevivir en un mundo post-apocalíptico con nuestra sección de objetos. Ofrecemos una amplia variedad de
        objetos para ayudarte a sobrevivir en un mundo en ruinas.
      </p>

      <figure className='Figure_Category'>
        <img src={charapter} alt='' />
      </figure>

      <p className='Paragraph'>
        Desde armas y suministros de supervivencia hasta ropa y equipo de protección, nuestra sección de objetos tiene todo lo que
        necesitas para estar preparado.
      </p>

      <p className='Paragraph'>
        <strong>¡únete a nosotros en nuestra sección de objetos hoy!</strong>
      </p>

      <article className='container_items'>{products}</article>
    </article>
  );
};

export default Objetos;
