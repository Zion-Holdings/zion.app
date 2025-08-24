import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { EnhancedFooter } from './components/EnhancedFooter';
import './App.css';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const AllServicesPage = React.lazy(() => import('./pages/AllServicesPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan"></div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-20">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Base Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/all-services" element={<AllServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            
            {/* Catch all route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <EnhancedFooter />
    </div>
  );
}

export default App;