import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-zion-blue-dark border-b border-zion-blue-light">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
            ZION
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
              Home
            </Link>
            <Link to="/micro-saas-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}