import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MicroSaasServices from './pages/MicroSaasServices';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/micro-saas-services" element={<MicroSaasServices />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;