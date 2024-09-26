import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function WineList() {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    const fetchWines = async () => {
      try {
        const response = await axios.get('/api/wines');
        setWines(response.data);
      } catch (error) {
        console.error('Error fetching wines:', error);
      }
    };

    fetchWines();
  }, []);

  return (
    <div>
      <h2>Wine List</h2>
      <ul>
        {wines.map((wine) => (
          <li key={wine.id}>
            <Link to={`/wines/${wine.id}`}>
              {wine.name} ({wine.year}) - {wine.type}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WineList;