import React from 'react';
import './App.css';
import List from './List';

function App() {

  const myItems = ['The Walking Dead', 'Game of Thrones', 'Stranger Things', 'Ahsoka'];

  return (
    <div className="App">
      <header className="App-header">
        {/* o componente List eh add aqui */}
        <List items={myItems} />
      </header>
    </div>
  );
}

export default App;
