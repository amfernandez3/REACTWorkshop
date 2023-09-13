import React, { useState } from 'react';

function CalculadoraPropinas() {
  const [montoFactura, setMontoFactura] = useState(0);
  const [porcentajePropina, setPorcentajePropina] = useState(10);

  return (
    <div>
      <h2>Calculadora de Propinas</h2>
      <label>Monto de la Factura: $</label>
      <input
        type="number"
        value={montoFactura}
        onChange={(e) => setMontoFactura(parseFloat(e.target.value))}
      />
      <br />
      <label>Porcentaje de Propina:</label>
      <select
        value={porcentajePropina}
        onChange={(e) => setPorcentajePropina(parseInt(e.target.value))}
      >
        <option value={10}>10%</option>
        <option value={15}>15%</option>
        <option value={20}>20%</option>
      </select>
      <br />
      <p>Total a pagar (incluyendo propina): ${(montoFactura * (1 + porcentajePropina / 100)).toFixed(2)}</p>
    </div>
  );
  
}

export default CalculadoraPropinas;
