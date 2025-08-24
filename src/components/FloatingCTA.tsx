import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ArrowUp, Star, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FloatingCTAProps {
  variant?: 'default' | 'minimal' | 'featured';
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

export function FloatingCTA({ 
  variant = 'default', 
  position = 'bottom-right' 
}: FloatingCTAProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-left':
        return 'bottom-6 left-6';
      case 'top-right':
        return 'top-6 right-6';
      case 'top-left':
        return 'top-6 left-6';
      default:
        return 'bottom-6 right-6';
    }
  };

  const getExpandedPositionClasses = () => {
    switch (position) {
      case 'bottom-left':
        return 'bottom-6 left-6';
      case 'top-right':
        return 'top-6 right-6';
      case 'top-left':
        return 'top-6 left-6';
      default:
        return 'bottom-6 right-6';
    }
  };

  if (variant === 'minimal') {
    return (
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className={`fixed ${getPositionClasses()} bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-4 rounded-full shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 z-40`}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    );
  }

  if (variant === 'featured') {
    return (
      <div className={`fixed ${getPositionClasses()} z-40`}>
        <AnimatePresence>
          {!isExpanded ? (
            <motion.button
              onClick={() => setIsExpanded(true)}
              className="bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-purple text-white p-4 rounded-full shadow-2xl hover:shadow-zion-purple/25 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <Zap className="w-6 h-6" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </motion.button>
          ) : (
            <motion.div
              className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-80"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-3">
                <Link
                  to="/marketplace"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  onClick={() => setIsExpanded(false)}
                >
                  <div className="w-10 h-10 bg-zion-cyan/10 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/20 transition-colors">
                    <Star className="w-5 h-5 text-zion-cyan" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Explore Marketplace</div>
                    <div className="text-sm text-gray-500">Find AI services & talent</div>
                  </div>
                </Link>
                
                <Link
                  to="/contact"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  onClick={() => setIsExpanded(false)}
                >
                  <div className="w-10 h-10 bg-zion-purple/10 rounded-lg flex items-center justify-center group-hover:bg-zion-purple/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-zion-purple" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Get Support</div>
                    <div className="text-sm text-gray-500">24/7 assistance</div>
                  </div>
                </Link>
                
                <Link
                  to="/signup"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  onClick={() => setIsExpanded(false)}
                >
                  <div className="w-10 h-10 bg-zion-cyan-light/10 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan-light/20 transition-colors">
                    <Users className="w-5 h-5 text-zion-cyan-light" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Join Zion</div>
                    <div className="text-sm text-gray-500">Free account setup</div>
                  </div>
                </Link>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500 text-center">
                  Need help? <span className="text-zion-cyan cursor-pointer hover:underline">Chat with us</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`fixed ${getPositionClasses()} z-40`}>
      <AnimatePresence>
        {!isExpanded ? (
          <motion.button
            onClick={() => setIsExpanded(true)}
            className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-4 rounded-full shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <MessageCircle className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </motion.button>
        ) : (
          <motion.div
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-80"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">How can we help?</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              <Link
                to="/marketplace"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                onClick={() => setIsExpanded(false)}
              >
                <div className="w-10 h-10 bg-zion-cyan/10 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/20 transition-colors">
                  <Star className="w-5 h-5 text-zion-cyan" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Browse Services</div>
                  <div className="text-sm text-gray-500">Find what you need</div>
                </div>
              </Link>
              
              <Link
                to="/contact"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                onClick={() => setIsExpanded(false)}
              >
                <div className="w-10 h-10 bg-zion-purple/10 rounded-lg flex items-center justify-center group-hover:bg-zion-purple/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-zion-purple" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Contact Support</div>
                  <div className="text-sm text-gray-500">Get help quickly</div>
                </div>
              </Link>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="text-xs text-gray-500 text-center">
                Or start a conversation with our AI assistant
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}