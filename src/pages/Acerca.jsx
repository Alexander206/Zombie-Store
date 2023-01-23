import React from 'react';

import '../styles/pages/Acerca.scss';

const Acerca = () => {
  return (
    <div className='Contacto'>
      <h1 className='Title__General'>Contacto</h1>
      <p className='Paragraph'>
        Bienvenido a nuestra página web apocalíptica. Somos un equipo de supervivencia apasionado que ofrece comida, lugares y
        objetos para ayudarlo a sobrevivir en un mundo post-apocalíptico.
      </p>
      <p className='Paragraph'>
        Nuestra misión es ayudar a las personas a prepararse para lo peor y a encontrar recursos valiosos en un mundo en ruinas.
      </p>
      <p className='Paragraph'>
        Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto con nosotros a través de nuestra página de
        contacto.
      </p>

      <h2 className='Title'>Póngase en contacto con nosotros</h2>

      <ul className='redes_sociales'>
        <li>
          <a href='https://www.linkedin.com/in/jeisson-alexander/'>
            <ion-icon name='logo-linkedin'></ion-icon>
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/amarokdev/'>
            <ion-icon name='logo-instagram'></ion-icon>
          </a>
        </li>
        <li>
          <a href='https://github.com/Alexander206'>
            <ion-icon name='logo-github'></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Acerca;
