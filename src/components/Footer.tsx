import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white">Terms</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}