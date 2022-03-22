import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Gallery from './routes/gallery';
import Secretariat from './routes/secretariat';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gallery" element={<Gallery />} />
      {/* <Route path="/secretariat" element={<Secretariat />} /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
