import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-zion-slate-dark text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-zion-cyan">
            Zion Tech Group
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-zion-cyan transition-colors">Home</Link>
            <Link to="/about" className="hover:text-zion-cyan transition-colors">About</Link>
            <Link to="/services" className="hover:text-zion-cyan transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-zion-cyan transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/contact">
              <button className="bg-zion-cyan text-zion-slate-dark px-4 py-2 rounded-lg hover:bg-zion-cyan/80 transition-colors">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};