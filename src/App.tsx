import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const Home = React.lazy(() => import('./pages/Home'));
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));
const Contact = React.lazy(() => import('./pages/Contact'));

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Suspense fallback={<div className="min-h-screen bg-zion-blue-dark flex items-center justify-center text-white">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comprehensive-services" element={<ComprehensiveServicesPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;