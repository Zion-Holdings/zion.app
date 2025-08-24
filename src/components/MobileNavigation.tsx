import React from 'react';
import { Link } from 'react-router-dom';

export const MobileNavigation: React.FC = () => {
  return (
    <nav className="md:hidden bg-zion-blue-dark border-t border-zion-blue-light">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around py-4">
          <Link
            to="/"
            className="flex flex-col items-center text-zion-slate-light hover:text-white transition-colors"
          >
            <span className="text-lg">🏠</span>
            <span className="text-xs">Home</span>
          </Link>
          
          <Link
            to="/comprehensive-services"
            className="flex flex-col items-center text-zion-slate-light hover:text-white transition-colors"
          >
            <span className="text-lg">🔧</span>
            <span className="text-xs">Services</span>
          </Link>
          
          <Link
            to="/pricing"
            className="flex flex-col items-center text-zion-slate-light hover:text-white transition-colors"
          >
            <span className="text-lg">💰</span>
            <span className="text-xs">Pricing</span>
          </Link>
          
          <Link
            to="/contact"
            className="flex flex-col items-center text-zion-slate-light hover:text-white transition-colors"
          >
            <span className="text-lg">📞</span>
            <span className="text-xs">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export const BottomNavigation: React.FC = () => {
  return (
    <nav className="md:hidden bg-zion-blue-dark border-t border-zion-blue-light fixed bottom-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around py-4">
          <Link
            to="/"
            className="flex flex-col items-center text-zion-slate-light hover:text-white transition-colors"
          >
            <span className="text-lg">🏠</span>
            <span className="text-xs">Home</span>
          </Link>
          
          <Link
            to="/comprehensive-services"
            className="flex flex-col items-center text-zion-slate-light hover:text-white transition-colors"
          >
            <span className="text-lg">🔧</span>
            <span className="text-xs">Services</span>
          </Link>
          
          <Link
            to="/pricing"
            className="flex flex-col items-center text-zion-slate-light hover:text-white transition-colors"
          >
            <span className="text-lg">💰</span>
            <span className="text-xs">Pricing</span>
          </Link>
          
          <Link
            to="/contact"
            className="flex flex-col items-center text-zion-slate-light hover:text-white transition-colors"
          >
            <span className="text-lg">📞</span>
            <span className="text-xs">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};