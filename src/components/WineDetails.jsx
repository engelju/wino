import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function WineDetails() {
  const { id } = useParams();
  const [wine, setWine] = useState(null);

  useEffect(() => {
    const fetchWineDetails = async () => {
      try {
        const response = await axios.get(`/api/wines/${id}`);
        setWine(response.data);
      } catch (error) {
        console.error('Error fetching wine details:', error);
      }
    };

    fetchWineDetails();
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