import React, { useState } from 'react';

function Contador() {
  // Utilizamos el hook useState para crear un estado inicial 'count' con valor 0
  const [count, setCount] = useState(0);

  const incrementar = () => {
    // Actualizamos el estado 'count' utilizando la función 'setCount'
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default Contador;