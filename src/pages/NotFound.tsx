import React from 'react';
<<<<<<< HEAD
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
=======
import { Link } from 'react-router-dom';

const NotFound = () => {
  const helpfulLinks = [
    { name: 'Home', path: '/', description: 'Return to our main page' },
    { name: 'Services', path: '/', description: 'Explore our technology solutions' },
    { name: 'About Us', path: '/about', description: 'Learn more about Zion Tech Group' },
    { name: 'Contact', path: '/contact', description: 'Get in touch with our team' }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center py-20">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple opacity-20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-zion-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zion-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* 404 Number */}
          <div className="text-8xl md:text-9xl font-bold text-zion-cyan mb-6 font-orbitron animate-pulse">
            404
          </div>
          
          {/* Main Message */}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-orbitron">
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
              Page Not Found
            </span>
          </h1>
          
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry though - we're here to help you find what you need.
          </p>

          {/* Helpful Links */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 font-orbitron">
              <span className="bg-gradient-to-r from-zion-purple-light to-zion-cyan bg-clip-text text-transparent">
                Here are some helpful links:
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {helpfulLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="bg-gradient-to-br from-zion-blue/50 to-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-zion-cyan/20 group"
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-zion-slate-light text-sm">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl p-8 border border-zion-cyan/20 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">
              Need Help?
            </h2>
            <p className="text-zion-slate-light mb-6">
              Can't find what you're looking for? Our team is here to help!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">📞</div>
                <p className="text-zion-slate-light text-sm">Call Us</p>
                <p className="text-white font-semibold">+1 302 464 0950</p>
              </div>
              <div>
                <div className="text-2xl mb-2">✉️</div>
                <p className="text-zion-slate-light text-sm">Email Us</p>
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🌐</div>
                <p className="text-zion-slate-light text-sm">Visit Our Site</p>
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-zion-cyan transition-colors"
                >
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Main CTA */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block px-10 py-5 bg-gradient-to-r from-zion-cyan to-zion-cyan-light text-zion-blue-dark font-bold rounded-lg hover:from-zion-cyan-light hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/50"
            >
              Return to Home
            </Link>
            
            <div className="text-zion-slate-light text-sm">
              Or use the navigation menu above to explore our site
            </div>
          </div>
>>>>>>> b0227f6a3f6a80df96e210611ae67bdcdc943ae0
        </div>
      </div>
    </div>
  );
};

export default NotFound;