// --------------------------
// src/App.jsx (updated for dark mode toggle)
// --------------------------
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Asanas from './pages/AsanasPage';
import Styles from './pages/StylesPage';
import Sequences from './pages/SequencesPage';
import Literature from './pages/LiteraturePage';
import Ayurveda from './pages/AyurvedaPage';
import Blog from './pages/BlogPage';
import Contact from './pages/ContactPage';
import LiteratureDetailPage from './pages/LiteratureDetailPage'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="font-body bg-sand text-forest dark:bg-accenttext dark:text-offwhite min-h-screen flex flex-col">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/asanas" element={<AsanasPage />} />
          <Route path="/asanas/:slug" element={<AsanaDetailPage />} />
          <Route path="/styles" element={<StylesPage />} />
          <Route path="/sequences" element={<SequencesPage />} />
          <Route path="/literature" element={<LiteraturePage />} />
          <Route path="/ayurveda" element={<AyurvedaPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/literature/:bookSlug/:chapterSlug" element={<LiteratureDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;