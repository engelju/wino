import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import WineEntry from './components/WineEntry';
import WineList from './components/WineList';
import WineDetails from './components/WineDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-wine">Add Wine</Link></li>
            <li><Link to="/wines">Wine List</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Welcome to the Wine App</h1>} />
          <Route path="/add-wine" element={<WineEntry />} />
          <Route path="/wines" element={<WineList />} />
          <Route path="/wines/:id" element={<WineDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;