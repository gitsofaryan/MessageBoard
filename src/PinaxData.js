// src/PinaxData.js
import React, { useEffect, useState } from 'react';

const PinaxData = ({ apiKey }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.pinax.network/v1/data', {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiKey]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Pinax Data</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PinaxData;
