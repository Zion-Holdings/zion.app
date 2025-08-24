import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'

// Import pages
import Home from './pages/Home'
import About from '../pages/about'
import Services from '../pages/services'
import Contact from '../pages/contact'
import Careers from '../pages/careers'
import Privacy from '../pages/privacy'

// Import layout components
import UltraFuturisticNavigation2045 from '../components/layout/UltraFuturisticNavigation2045'
import UltraFuturisticFooter2045 from '../components/layout/UltraFuturisticFooter2045'

function App() {
  return (
    <Router>
      <div className="App">
        <UltraFuturisticNavigation2045 />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <UltraFuturisticFooter2045 />
      </div>
    </Router>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)