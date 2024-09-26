import React, { useState } from 'react';
import { addWine } from '../services/indexedDB'
import '../App.css';

function WineEntry() {
  const [wineName, setWineName] = useState('');
  const [wineYear, setWineYear] = useState('');
  const [wineType, setWineType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const wineData = {
      name: wineName,
      year: wineYear,
      type: wineType,
    };

    try {
      const id = await addWine(wineData);
      console.log('Wine added successfully with ID:', id);

      // Reset form fields
      setWineName('');
      setWineYear('');
      setWineType('');
    } catch (error) {
      console.error('Error adding wine:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="wineName">Wine Name:</label>
        <input
          type="text"
          id="wineName"
          value={wineName}
          onChange={(e) => setWineName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="wineYear">Wine Year:</label>
        <input
          type="number"
          id="wineYear"
          value={wineYear}
          onChange={(e) => setWineYear(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="wineType">Wine Type:</label>
        <input
          type="text"
          id="wineType"
          value={wineType}
          onChange={(e) => setWineType(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Wine</button>
    </form>
  );
}

export default WineEntry;