import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { ScrollToTop } from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import HelpCenter from './pages/HelpCenter';
import RequestQuote from './pages/RequestQuote';
import HomePage from './pages/HomePage';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Sitemap from './pages/Sitemap';
import NotFound from './pages/NotFound';
import AISolutions from './pages/AISolutions';
import CloudInfrastructure from './pages/CloudInfrastructure';
import Cybersecurity from './pages/Cybersecurity';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Header />
        <div className="flex pt-16">
          <Sidebar className="hidden lg:block" />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/quote" element={<RequestQuote />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/ai-solutions" element={<AISolutions />} />
              <Route path="/cloud-infrastructure" element={<CloudInfrastructure />} />
              <Route path="/cybersecurity" element={<Cybersecurity />} />
              <Route path="/services/:category" element={<Services />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;