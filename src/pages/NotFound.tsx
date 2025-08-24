import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-9xl font-bold text-blue-400 mb-6">404</div>
        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-xl text-blue-100 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved, 
          deleted, or you entered the wrong URL.
        </p>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            Go Home
          </Link>
          
          <div className="text-blue-200">
            <p className="mb-2">Or try these pages:</p>
            <div className="flex justify-center gap-4">
              <Link
                to="/about"
                className="text-blue-300 hover:text-white transition-colors duration-200"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-blue-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}