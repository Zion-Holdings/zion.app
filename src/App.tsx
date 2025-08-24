import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import EnhancedFooter from './components/EnhancedFooter';
import './App.css';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const AllServicesPage = React.lazy(() => import('./pages/AllServicesPage'));

function App() {
  return (
    <div className="App">
      <Header />
      <main className="min-h-screen">
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/all-services" element={<AllServicesPage />} />
          </Routes>
        </Suspense>
      </main>
      <EnhancedFooter />
    </div>
  );
}

export default App;
