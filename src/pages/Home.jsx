import React from 'react';

/* Estilos */
import '../styles/pages/Home.scss';

/* Molecules */
import Category from '../components/_molecules/Category';

/* Variables */
import comida from '../assets/img/Comida.svg';
import lugares from '../assets/img/Lugares.svg';
import Objetos from '../assets/img/Objetos.svg';

import fondo from '../assets/img/fondoHome.jpg';

const Home = ({ home, setHome }) => {
  return (
    <article id='list-item-0' className='home'>
      <div className='card text-bg-dark img-home'>
        <img src={fondo} className='card-img' alt='...' />
        <div className='card-img-overlay'>
          <h5 className='card-title Title'>Home</h5>
          <p className='card-text Paragraph'>
            Bienvenido al mundo post-apocalíptico, un lugar donde la supervivencia es la clave para sobrevivir. En nuestra página
            web, encontrarás todo lo necesario para prepararte para lo peor y sobrevivir en un mundo en ruinas. Ofrecemos comida,
            lugares y objetos para ayudarte en tu camino.
          </p>
          <p className='card-text'>
            <small>¡Prepárate para sobrevivir en este nuevo mundo con nosotros!</small>
          </p>
        </div>
      </div>

      <p className='Paragraph'>
        No te olvides Conocer más sobre nosotros y como podemos ayudarte. No dudes en ponerte en contacto con nosotros si tienes
        alguna pregunta o sugerencia a través de nuestra sección de contacto."
      </p>

      <h2 className='Caption'>Secciones</h2>

      <article className='container_items'>
        <Category img={comida} section='#list-item-1' text='Comida' home={home} setHome={setHome} />
        <Category img={lugares} section='#list-item-2' text='Lugares' home={home} setHome={setHome} />
        <Category img={Objetos} section='#list-item-3' text='Objetos' home={home} setHome={setHome} />
      </article>
    </article>
  );
};

export default Home;
