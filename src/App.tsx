import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Home } from './pages/Home';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<div className="min-h-screen bg-zion-blue-dark text-white flex items-center justify-center"><h1 className="text-4xl">Services Page</h1></div>} />
        <Route path="/about" element={<div className="min-h-screen bg-zion-blue-dark text-white flex items-center justify-center"><h1 className="text-4xl">About Page</h1></div>} />
        <Route path="/contact" element={<div className="min-h-screen bg-zion-blue-dark text-white flex items-center justify-center"><h1 className="text-4xl">Contact Page</h1></div>} />
      </Routes>
    </Layout>
  );
}

export default App;