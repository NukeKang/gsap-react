import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Layout from './Layout.jsx';
import { Gsap2 } from './Gsap2.jsx';
import { Gsap3 } from './Gsap3.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<App />} />
          <Route path='gsap2' element={<Gsap2 />} />
          <Route path='gsap3' element={<Gsap3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
