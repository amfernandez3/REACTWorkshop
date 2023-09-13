import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import CalculadoraPropinas from './components/calculator'; // Asegúrate de tener la ruta correcta hacia tu componente


ReactDOM.render(
  <React.StrictMode>
    <CalculadoraPropinas />
  </React.StrictMode>,
  document.getElementById('root')
);


