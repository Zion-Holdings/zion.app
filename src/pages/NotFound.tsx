import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AppHeader } from "@/layout/AppHeader";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="404 - Page Not Found | Zion Tech Group" 
        description="The page you're looking for doesn't exist. Return to our homepage to explore our AI marketplace and services."
        keywords="404, page not found, Zion Tech Group"
        canonical="https://ziontechgroup.com/404"
      />
      
      <AppHeader />
      
      <main className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center p-6 max-w-md mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-2xl font-semibold mb-4 text-white">Page Not Found</h2>
            <p className="text-zion-slate-light mb-8">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block bg-zion-purple hover:bg-zion-purple-light text-white px-6 py-3 rounded-md transition-colors font-medium"
            >
              Return to Home
            </Link>
            
            <div className="text-sm text-zion-slate-light">
              <p>Or try these helpful links:</p>
              <div className="flex justify-center space-x-4 mt-2">
                <Link to="/services" className="text-zion-cyan hover:text-zion-cyan-light">
                  Services
                </Link>
                <Link to="/talent" className="text-zion-cyan hover:text-zion-cyan-light">
                  Talent
                </Link>
                <Link to="/contact" className="text-zion-cyan hover:text-zion-cyan-light">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;