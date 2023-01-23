import React, { useEffect, useState } from 'react';

import '../styles/pages/Tienda.scss';

import LIST_ITEM from '../components/containers/list_Item';

let listElement;
let total;

const Tienda = ({ list, setaList }) => {

  listElement = list.map((item, i) => (
    <LIST_ITEM
      key={i}
      id={`${i + 1}`}
      name={item.title}
      catogory={item.category}
      price={item.price}
      list={list}
      setaList={setaList}
    />
  ));

  total = list.reduce((i, item) => i + item.price, 0);

  useEffect(() => {
    setaList(list);
    console.log('El estado cambia', list);
  }, [list]);

  return (
    <main className='Tienda'>
      <section>
        <h1 className='Title'>¡Bienvenido a tu carrito de compras!</h1>
        <p className='Paragraph'>
          Revisa tus productos y asegúrate de que todo esté correcto antes de proceder con tu compra. Si necesitas hacer cambios,
          no dudes en hacerlo.
        </p>

        <p className='Paragraph'>
          <strong>¡Gracias por tu compra!</strong>
        </p>
      </section>

      <table className='table table-sm'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Nombre</th>
            <th scope='col'>Categoría</th>
            <th scope='col'>Precio</th>
            <th scope='col'>Eliminar</th>
          </tr>
        </thead>
        <tbody>{listElement}</tbody>
      </table>

      <p className='Paragraph total'>
        Total: <strong> {total} </strong>
      </p>
    </main>
  );
};

export default Tienda;
