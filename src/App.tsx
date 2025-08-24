import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import ExpandedServicesPage from './pages/ExpandedServicesPage';
import AIServicesPage from './pages/AIServicesPage';
import CybersecurityServicesPage from './pages/CybersecurityServicesPage';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expanded-services" element={<ExpandedServicesPage />} />
          <Route path="/ai-services" element={<AIServicesPage />} />
          <Route path="/cybersecurity" element={<CybersecurityServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;