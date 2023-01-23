import React, { useState } from 'react';

/* Stilos */
import '../styles/main.scss';

/* Components */
import HEADER from '../components/containers/Header';
import ASIDE_CATEGORIES from '../components/containers/Aside_Categories';

import COMIDA from './Comida';
import HOME from './Home';
import LUGARES from './Lugares';
import OBJETOS from './Objetos';
import ACERCA from './Acerca';

const App = () => {
  const [home, setHome] = useState(true);

  if (home) {
    return (
      <>
        <HEADER home={home} setHome={setHome} />
        <HOME home={home} setHome={setHome} />
      </>
    );
  } else {
    return (
      <>
        <HEADER home={home} setHome={setHome} />
        <main className='main' data-bs-spy='scroll' data-bs-target='#navbar-example'>
          <ASIDE_CATEGORIES id='list-example' className='list-group' />

          <section className='secction_content'>
            <COMIDA />

            <LUGARES />

            <OBJETOS />

            <ACERCA />
          </section>
        </main>
      </>
    );
  }
};

export default App;
