import React, { useState, useEffect } from 'react';

function Counter() {
  // Usando o hook useState para gerenciar o estado do contador. O valor inicial eh 0.
  const [count, setCount] = useState(0);

  // Usando o hook useEffect para um "efeito colateral". Pra atualizar o titulo da aba do navegador.
  useEffect(() => {
    // Atualiza o titulo da aba do navegador p refletir o estado atual do contador
    // Eh um "efeito colateral" que nao afeta a renderizacao do componente
    document.title = `Você clicou ${count} vezes`;
  }, [count]); // O array de dependências.

  // Aqui, tem-se funcoes. 1 para incrementar e outra p decrementar o contador.
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  // Aqui, tem infos do que o componente renderiza na tela.
  return (
    <div className="list-container">
      <h2>Contador</h2>
      <p className="counter-text">O contador está em: {count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Counter;