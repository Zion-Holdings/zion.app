import React from 'react';
import { Link } from 'react-router-dom';

export function MainNavigation() {
  return (
    <nav className="hidden md:flex space-x-6">
      <Link to="/marketplace" className="text-white hover:text-blue-300 transition-colors">
        Marketplace
      </Link>
      <Link to="/services" className="text-white hover:text-blue-300 transition-colors">
        Services
      </Link>
      <Link to="/talent" className="text-white hover:text-blue-300 transition-colors">
        Talent
      </Link>
      <Link to="/equipment" className="text-white hover:text-blue-300 transition-colors">
        Equipment
      </Link>
    </nav>
  );
}