import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const About = React.lazy(() => import('./pages/AboutPage'));
const Contact = React.lazy(() => import('./pages/Contact'));

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
              <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-cyan-400 text-lg">Loading...</p>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </React.Suspense>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
