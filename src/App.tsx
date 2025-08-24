import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import './App.css';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));

const App = () => {
  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <Header />
        <Sidebar />
        
        {/* Main Content with proper spacing for header and sidebar */}
        <main className="ml-64 pt-20 min-h-screen">
          <React.Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-cyan-400 text-lg">Loading...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/comprehensive-services" element={<Services />} />
              <Route path="/services-comparison" element={<Services />} />
              <Route path="/it-onsite-services" element={<Services />} />
            </Routes>
          </React.Suspense>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;