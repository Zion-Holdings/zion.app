
import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-zion-blue-dark text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            Zion Tech Group
          </Link>
          
          <nav className="hidden md:flex space-x-8">
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
          
          <div className="md:hidden">
            <button className="text-zion-slate-light hover:text-zion-cyan p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
