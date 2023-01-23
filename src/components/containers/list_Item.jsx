import React from 'react';

const list_Item = ({ id, name, catogory, price, list, setaList }) => {
  const handlerBtnDelete = () => {
    console.log(id);
    setaList(list.filter((producto) => producto.id !== Number(id) - 1));
    console.log(list);
  };

  return (
    <tr>
      <th scope='row'>{id}</th>
      <td>{name}</td>
      <td>{catogory}</td>
      <td>{price}</td>
      <td>
        <button className='btn_list' onClick={handlerBtnDelete}>
          <ion-icon name='trash'></ion-icon>
        </button>
      </td>
    </tr>
  );
};

export default list_Item;
