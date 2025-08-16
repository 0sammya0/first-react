import React, { useState, useEffect } from 'react';

function Timer() {
  // Usando o hook useState para armazenar o valor do timer.
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Cria um timer que roda a cada 1000 milissegundos.
    const timerId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    /*A funcao de limpeza que eh retornada, eh essencial p parar o timer 
      quando o componente eh removido da tela, pq evita vazamento de memoria.*/
    return () => clearInterval(timerId);
  }, []); // Aqui, o array vazio indica que este efeito roda apenas uma vez.

  return (
    <div className="list-container">
      <h2>Timer</h2>
      <p className="timer-text">Tempo passado: {seconds} segundos</p>
    </div>
  );
}

export default Timer;