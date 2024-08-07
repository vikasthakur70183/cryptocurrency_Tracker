import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncSelect from 'react-select/async';
import "./Converter.css";

const CryptoConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState(null);
  const [toCurrency, setToCurrency] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [fiatOptions, setFiatOptions] = useState([]);
  const [cryptoOptions, setCryptoOptions] = useState([]);

  useEffect(() => {
    const response=loadFiatOptions();
    console.log(response);
    loadCryptoOptions();
  }, []);

  const loadFiatOptions = async (inputValue) => {
    if (!inputValue) return [];
    try {
      const response = await axios.get(`/api/v1/fiat/map`, {
        headers: {
          'X-CMC_PRO_API_KEY': import.meta.env.VITE_CMC_API_KEY,
        },
      });
      return response.data.data.map(fiat => ({
        id: fiat.id,
        name: fiat.name,
        symbol: fiat.symbol,
      }));
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const loadCryptoOptions = async (inputValue) => {
    if (!inputValue) return [];
    try {
      const response = await axios.get(`/api/v1/cryptocurrency/map`, {
        headers: {
          'X-CMC_PRO_API_KEY': import.meta.env.VITE_CMC_API_KEY,
        },
      });
      return response.data.data.map(crypto => ({
        id: crypto.id,
        name: crypto.name,
        symbol: crypto.symbol,
      }));
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const handleConversion = () => {
    if (!fromCurrency || !toCurrency) return;

    axios.get(`/api/v2/tools/price-conversion`, {
      headers: {
        'X-CMC_PRO_API_KEY': import.meta.env.VITE_CMC_API_KEY,
      },
      params: {
        amount: amount,
        id: fromCurrency.id,
        convert_id: toCurrency.id
      }
    })
      .then(response => {
        const quote = response.data.data.quote[toCurrency.id];
        setConvertedAmount(quote ? quote.price : 'Conversion not available');
      })
      .catch(error => console.error(error));
  };

  const formatOptionLabel = ({ name, symbol }) => (
    <div>
      {name} ({symbol})
    </div>
  );

  return (
    <div className="container">
      <h1>Cryptocurrency Converter Calculator</h1>
      <div className='converts_inputs'>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
        <div className='dropdown'>
          <AsyncSelect
            cacheOptions
            loadOptions={loadFiatOptions}
            onChange={setFromCurrency}
            formatOptionLabel={formatOptionLabel}
            defaultOptions={fiatOptions}
          />

          <AsyncSelect
            cacheOptions
            loadOptions={loadCryptoOptions}
            onChange={setToCurrency}
            formatOptionLabel={formatOptionLabel}
            defaultOptions={cryptoOptions}
          />
        </div>
      </div>
      <button onClick={handleConversion}>Convert</button>

      {convertedAmount && (
        <div>
          <h2>Converted Amount:</h2>
          <p>{convertedAmount}</p>
        </div>
      )}
    </div>
  );
};

export default CryptoConverter;
