import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  const fetchApiData = async () => {
    try {
      const response = await axios.get('/api/v1/cryptocurrency/listings/latest'); // Ensure proxy is set up correctly
      console.log(response.data);
      setData(response.data.data); // Correctly access the response data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <>
      <h1>Cryptocurrency Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>24h Volume</th>
            <th> Change (24h)</th>
            <th> Change (7d)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((crypto) => (
            <tr key={crypto.id}>
              <td>{crypto.name}</td>
              <td>
                <img
                  src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`}
                  alt={crypto.name}
                  style={{ width: '24px', height: '24px', marginRight: '8px' }}
                />
                {crypto.symbol}
              </td>
              <td>{crypto.quote.USD.price.toFixed(2)}</td>
              <td>{crypto.quote.USD.volume_24h.toFixed(2)}</td>
              <td>{crypto.quote.USD.percent_change_24h?.toFixed(2) || 'N/A'}</td>
              <td>{crypto.quote.USD.percent_change_7d?.toFixed(2) || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
