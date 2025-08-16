import React from 'react';

function List(props) {

  const defaultItems = ['Item 1', 'Item 2', 'Item 3'];

  const items = props.items || defaultItems;

  return (
    <div className="list-container">
      <h2>Lista de Séries</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;