<<<<<<< HEAD
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl font-bold text-white mb-6">404</div>
        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-xl text-zion-slate-light mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Go Home
          </Link>
          <Link to="/contact" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Us
          </Link>
        </div>
=======
import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-zion-blue mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-zion-slate mb-4">Page Not Found</h2>
        <p className="text-zion-slate-light mb-8">
          The page you're looking for doesn't exist.
        </p>
        <a 
          href="/" 
          className="bg-zion-blue hover:bg-zion-blue-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Go Home
        </a>
>>>>>>> dd620ef4409d707a58974776442fbda9c1819828
      </div>
    </div>
  );
}