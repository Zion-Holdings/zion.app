import React from 'react';
import { Link } from 'react-router-dom';

export const AppHeader: React.FC = () => {
  return (
    <header className="bg-zion-blue-dark border-b border-zion-blue-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
              ZION
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-zion-slate-light hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/comprehensive-services" className="text-zion-slate-light hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/pricing" className="text-zion-slate-light hover:text-white transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-zion-slate-light hover:text-white transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-zion-slate-light hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-zion-cyan text-white px-4 py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};