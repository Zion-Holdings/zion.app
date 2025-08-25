import React from 'react';
import { Link } from 'react-router-dom';

export function AppHeader() {
  return (
    <header className="bg-zion-blue-dark/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
              Services
            </Link>
            <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
              About
            </Link>
            <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
              Contact
            </Link>
            <Link to="/request-quote" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
              Get Quote
            </Link>
          </nav>
          
          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link
              to="/signup"
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded-md transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}