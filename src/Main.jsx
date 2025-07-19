// /src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './styles/index.css';
import App from './App'

// Optional: Add AOS or Framer Motion setup here
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)