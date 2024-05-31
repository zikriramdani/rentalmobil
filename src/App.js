import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Users from './pages/users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
