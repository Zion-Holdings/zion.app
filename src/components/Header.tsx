import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-b border-blue-500/30 shadow-lg shadow-blue-500/20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-purple-900/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.1),transparent_50%)] animate-float"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-cyan-600 transition-all duration-300 animate-neon-pulse">
                Zion Tech Group
              </h1>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-blue-300 hover:text-cyan-300 px-3 py-2 text-sm font-medium transition-colors duration-300 hover:scale-105">
              Home
            </Link>
            <div className="relative group">
              <button className="text-blue-300 hover:text-cyan-300 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-300 hover:scale-105">
                Services
                <svg className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-blue-500/30 rounded-xl shadow-2xl shadow-blue-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-4 px-2">
                  <div className="grid grid-cols-2 gap-2">
                    <Link to="/micro-saas-services" className="block px-4 py-3 text-sm text-gray-300 hover:bg-blue-500/20 hover:text-cyan-300 rounded-lg transition-all duration-300 hover:scale-105">
                      <div className="font-semibold text-cyan-400">Micro SAAS</div>
                      <div className="text-xs text-gray-400">Affordable business solutions</div>
                    </Link>
                    <Link to="/it-onsite-services" className="block px-4 py-3 text-sm text-gray-300 hover:bg-blue-500/20 hover:text-cyan-300 rounded-lg transition-all duration-300 hover:scale-105">
                      <div className="font-semibold text-cyan-400">IT Services</div>
                      <div className="text-xs text-gray-400">Onsite & remote support</div>
                    </Link>
                    <Link to="/ai-services" className="block px-4 py-3 text-sm text-gray-300 hover:bg-blue-500/20 hover:text-cyan-300 rounded-lg transition-all duration-300 hover:scale-105">
                      <div className="font-semibold text-cyan-400">AI Solutions</div>
                      <div className="text-xs text-gray-400">Machine learning & automation</div>
                    </Link>
                    <Link to="/enterprise-solutions" className="block px-4 py-3 text-sm text-gray-300 hover:bg-blue-500/20 hover:text-cyan-300 rounded-lg transition-all duration-300 hover:scale-105">
                      <div className="font-semibold text-cyan-400">Enterprise</div>
                      <div className="text-xs text-gray-400">Large-scale solutions</div>
                    </Link>
                    <Link to="/cloud-devops-solutions" className="block px-4 py-3 text-sm text-gray-300 hover:bg-blue-500/20 hover:text-cyan-300 rounded-lg transition-all duration-300 hover:scale-105">
                      <div className="font-semibold text-cyan-400">Cloud & DevOps</div>
                      <div className="text-xs text-gray-400">Infrastructure & deployment</div>
                    </Link>
                    <Link to="/digital-transformation" className="block px-4 py-3 text-sm text-gray-300 hover:bg-blue-500/20 hover:text-cyan-300 rounded-lg transition-all duration-300 hover:scale-105">
                      <div className="font-semibold text-cyan-400">Digital Transformation</div>
                      <div className="text-xs text-gray-400">Modernize your business</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/about" className="text-blue-300 hover:text-cyan-300 px-3 py-2 text-sm font-medium transition-colors duration-300 hover:scale-105">
              About
            </Link>
            <Link to="/contact" className="text-blue-300 hover:text-cyan-300 px-3 py-2 text-sm font-medium transition-colors duration-300 hover:scale-105">
              Contact
            </Link>
            <Link to="/pricing" className="text-blue-300 hover:text-cyan-300 px-3 py-2 text-sm font-medium transition-colors duration-300 hover:scale-105">
              Pricing
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400 hover:text-cyan-300 transition-all duration-300">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};