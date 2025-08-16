import React from 'react';
import './App.css';
import List from './List';
import Counter from './hooks-pratica/Counter';
import Timer from './hooks-pratica/Timer';

function App() {

  const myItems = ['The Walking Dead', 'Game of Thrones', 'Stranger Things', 'Ahsoka'];

  return (
    <div className="App">
      <header className="App-header">
        <List items={myItems} />
        <Counter />
        <Timer />
      </header>
    </div>
  );
}

export default App;
