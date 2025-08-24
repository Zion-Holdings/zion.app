import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-zion-blue mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-zion-slate mb-4">Page Not Found</h2>
        <p className="text-zion-slate-light mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <Link 
          to="/"
          className="inline-block bg-zion-blue hover:bg-zion-blue-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}