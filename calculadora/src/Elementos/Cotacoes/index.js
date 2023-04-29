import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cotacoes() {
  const [cotacoes, setCotacoes] = useState([]);

  useEffect(() => {
    async function fetchCotacoes() {
      const response = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL');
      setCotacoes(response.data);
    }

    const interval = setInterval(fetchCotacoes, 5000);
    fetchCotacoes();

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h2>Cotações</h2>

      <ul>
        <li>Dólar americano (USD): compra R$ {cotacoes.USDBRL?.bid} / venda R$ {cotacoes.USDBRL?.ask}</li>
        <li>Euro (EUR): compra R$ {cotacoes.EURBRL?.bid} / venda R$ {cotacoes.EURBRL?.ask}</li>
        <li>Bitcoin (BTC): compra R$ {cotacoes.BTCBRL?.bid} / venda R$ {cotacoes.BTCBRL?.ask}</li>
        <li>{cotacoes.USDBRL?.create_date}</li>
      </ul>
    </div>
  );
}

export default Cotacoes;
