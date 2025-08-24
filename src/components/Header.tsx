import React from 'react';
import { Link } from 'react-router-dom';
import { MainNavigation } from '../layout/MainNavigation';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-sm border-b border-zion-blue-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>
          <MainNavigation />
        </div>
      </div>
    </header>
  );
}