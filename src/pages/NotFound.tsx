import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-8xl md:text-9xl font-bold text-zion-cyan mb-6">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Page Not Found
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-lg mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Go Home
            </Link>
            <div className="text-zion-slate-light">
              or
            </div>
            <Link
              to="/contact"
              className="inline-block border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;