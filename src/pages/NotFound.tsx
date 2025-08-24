import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SEO } from '@/components/SEO';

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const path = location.pathname || '';
  const title = path && path !== '/' ? `404 – ${path} not found` : '404 – Page Not Found';
  const description = `The page at ${path || 'this URL'} could not be found.`;

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical="https://ziontechgroup.com/404"
      />
      <div className="min-h-screen bg-zion-blue flex items-center justify-center">
        <div className="text-center p-6">
          <h1 className="text-6xl font-bold mb-4 text-zion-cyan">404</h1>
          <p className="text-2xl text-white mb-6">Oops! Page not found</p>
          <p className="text-zion-slate-light mb-8 text-lg">
            The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;