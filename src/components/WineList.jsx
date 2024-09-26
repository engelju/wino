import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchWines } from '../services/indexedDB';
import '../App.css';

function WineList() {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    const getWines = async () => {
      try {
        const data = await fetchWines();
        setWines(data);
      } catch (error) {
        console.error('Error fetching wines:', error);
      }
    };

    getWines();
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