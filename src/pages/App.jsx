import React, { useState } from 'react';

/* Stilos */
import '../styles/main.scss';

/* Components */
import HEADER from '../components/containers/Header';
import ASIDE_CATEGORIES from '../components/containers/Aside_Categories';
import BTN_CARRITO from '../components/bootstrap/Btn_Carrito';

import COMIDA from './Comida';
import HOME from './Home';
import LUGARES from './Lugares';
import OBJETOS from './Objetos';
import ACERCA from './Acerca';
import TIENDA from './Tienda';

const App = () => {
  const [home, setHome] = useState(true);
  const [about, setabout] = useState(false);
  const [tienda, setatienda] = useState(false);

  const [list, setaList] = useState([]);

  if (home) {
    return (
      <>
        <HEADER home={home} setHome={setHome} about={about} setabout={setabout} setatienda={setatienda} />
        <HOME home={home} setHome={setHome} />
      </>
    );
  } else if (about) {
    return (
      <>
        <HEADER home={home} setHome={setHome} about={about} setabout={setabout} setatienda={setatienda} />
        <ACERCA />
      </>
    );
  } else if (tienda) {
    return (
      <>
        <HEADER home={home} setHome={setHome} about={about} setabout={setabout} setatienda={setatienda} />
        <TIENDA list={list} setaList={setaList} />
      </>
    );
  } else {
    return (
      <>
        <HEADER home={home} setHome={setHome} about={about} setabout={setabout} setatienda={setatienda} />
        <BTN_CARRITO setHome={setHome} setabout={setabout} setatienda={setatienda} list={list} />

        <main className='main'>
          <ASIDE_CATEGORIES home={home} setHome={setHome} id='list-example' className='list-group' />

          <section className='secction_content'>
            <div id='list-item-1'></div>
            <COMIDA list={list} setaList={setaList} />
            <div id='list-item-2'></div>
            <LUGARES list={list} setaList={setaList} />
            <div id='list-item-3'></div>
            <OBJETOS list={list} setaList={setaList} />
          </section>
        </main>
      </>
    );
  }
};

export default App;
