import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Map, Phone } from 'lucide-react';
import { MetaTags } from '../components/MetaTags';

const NotFound: React.FC = () => {
  const popularPages = [
    { path: '/', label: 'Home', icon: Home, description: 'Return to homepage' },
    { path: '/services', label: 'Services', icon: Search, description: 'Browse our services' },
    { path: '/ai-solutions', label: 'AI Solutions', icon: Search, description: 'Explore AI offerings' },
    { path: '/contact', label: 'Contact', icon: Phone, description: 'Get in touch' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <MetaTags
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Explore our services or return to the homepage."
        type="website"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          {/* 404 Animation */}
          <div className="mb-8">
            <div className="text-9xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
              404
            </div>
            <div className="text-2xl text-gray-400 mt-4">Page Not Found</div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, we've got plenty of amazing content for you to explore.
            </p>
          </div>

          {/* Popular Pages */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Popular Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="glass-card p-4 hover:scale-105 transition-all duration-300 group text-left"
                >
                  <div className="flex items-center space-x-3">
                    <page.icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                    <div>
                      <div className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-300">
                        {page.label}
                      </div>
                      <div className="text-sm text-gray-400">{page.description}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/"
              className="futuristic-btn text-lg px-8 py-4 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Home</span>
            </Link>
            
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300 group"
            >
              <span>Contact Support</span>
            </Link>
          </div>

          {/* Search Suggestion */}
          <div className="mt-12 p-6 glass-card max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-white mb-3">Can't find what you're looking for?</h3>
            <p className="text-gray-300 mb-4">
              Try searching our site or browse our comprehensive service catalog.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <Search className="w-4 h-4" />
              <span>Browse All Services</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
