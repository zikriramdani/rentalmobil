import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Cars from './pages/cars';
import Orders from './pages/orders';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cars />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
