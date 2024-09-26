import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchWineDetails } from '../services/indexedDB';
import '../App.css';

function WineDetails() {
  const { id } = useParams();
  const [wine, setWine] = useState(null);

  useEffect(() => {
    const getWineDetails = async () => {
      try {
        const data = await fetchWineDetails(Number(id));
        setWine(data);
      } catch (error) {
        console.error('Error fetching wine details:', error);
      }
    };

    getWineDetails();
  }, [id]);

  if (!wine) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Wine Details</h2>
      <p><strong>Name:</strong> {wine.name}</p>
      <p><strong>Year:</strong> {wine.year}</p>
      <p><strong>Type:</strong> {wine.type}</p>
    </div>
  );
}

export default WineDetails;