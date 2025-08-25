import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-6 flex items-center justify-center">
            <AlertTriangle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-zion-blue-dark mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-zion-blue-dark mb-4">
            Page Not Found
          </h2>
          <p className="text-zion-slate mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          
          <div className="pt-4">
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zion-slate-light">
          <h3 className="text-lg font-semibold text-zion-blue-dark mb-4">
            Popular Pages
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <Link 
              to="/services" 
              className="text-zion-slate hover:text-zion-cyan transition-colors text-sm"
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-zion-slate hover:text-zion-cyan transition-colors text-sm"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-zion-slate hover:text-zion-cyan transition-colors text-sm"
            >
              Contact
            </Link>
            <Link 
              to="/blog" 
              className="text-zion-slate hover:text-zion-cyan transition-colors text-sm"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServerError = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <AlertTriangle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-red-600 mb-4">500</h1>
          <h2 className="text-2xl font-semibold text-zion-blue-dark mb-4">
            Server Error
          </h2>
          <p className="text-zion-slate mb-8">
            Something went wrong on our end. We're working to fix it. 
            Please try again later.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          
          <div className="pt-4">
            <button 
              onClick={() => window.location.reload()}
              className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ErrorRoutes = () => {
  const location = useLocation();
  
  // Check if it's a 500 error (you can implement your own logic here)
  const isServerError = location.pathname === '/500' || location.state?.error === 'server';
  
  return (
    <Routes>
      <Route path="/404" element={<NotFound />} />
      <Route path="/500" element={<ServerError />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ErrorRoutes;