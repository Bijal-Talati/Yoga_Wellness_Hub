// --------------------------
// src/components/Navbar.jsx (updated with toggle)
// --------------------------
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="bg-clay dark:bg-warmgray text-forest dark:text-offwhite shadow p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/asanas">Asanas</Link>
        <Link to="/styles">Styles</Link>
        <Link to="/sequences">Sequences</Link>
        <Link to="/literature">Literature</Link>
        <Link to="/ayurveda">Ayurveda</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 px-2 py-1 border rounded text-sm hover:bg-sky hover:text-forest dark:hover:bg-beige"
        aria-label="Toggle dark mode"
      >
        {darkMode ? '☀ Light' : '🌙 Dark'}
      </button>
    </nav>
  );
};

export default Navbar;