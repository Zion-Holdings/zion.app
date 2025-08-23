import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Wifi, WifiOff, RefreshCw, Home, Briefcase, Phone } from 'lucide-react';
import Link from 'next/link';

const OfflinePage: React.FC = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="text-center max-w-2xl mx-auto">
          {/* Offline Icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative">
              <WifiOff className="w-32 h-32 text-red-500 mx-auto mb-4" />
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              You're Offline
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't worry! You can still access previously visited pages and explore our cached content. 
              We're working to get you back online as soon as possible.
            </p>

            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 mb-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                <Wifi className="w-6 h-6 mr-2 text-cyan-400" />
                What You Can Do
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Home className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Browse Cached Pages</h3>
                    <p className="text-sm text-gray-400">Access previously visited content</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Briefcase className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">View Services</h3>
                    <p className="text-sm text-gray-400">Explore our technology solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Contact Info</h3>
                    <p className="text-sm text-gray-400">Get in touch when online</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleRetry}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-4 focus:ring-cyan-500/50 flex items-center"
            >
              <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-300" />
              Try Again
            </button>
            
            <button
              onClick={handleGoHome}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 flex items-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-sm mb-4">
              Need immediate assistance? Contact us directly:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a 
                href="tel:+1-800-ZION-TECH" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                +1-800-ZION-TECH
              </a>
              
              <span className="text-gray-600 hidden sm:block">•</span>
              
              <a 
                href="mailto:info@ziontechgroup.com" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                info@ziontechgroup.com
              </a>
            </div>
          </motion.div>

          {/* Network Status Indicator */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            className="mt-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
              No Internet Connection
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default OfflinePage;