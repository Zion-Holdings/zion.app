
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, X, ChevronUp, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.2
      }
    }
  };

  const expandVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      y: 20
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="absolute bottom-20 right-0 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md"
            variants={expandVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-lg">Quick Actions</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-zion-slate-light hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              <Link
                to="/match"
                className="flex items-center gap-3 p-3 rounded-lg bg-zion-purple/20 hover:bg-zion-purple/30 transition-colors group"
                onClick={() => setIsExpanded(false)}
              >
                <div className="p-2 rounded-full bg-zion-purple/30 group-hover:scale-110 transition-transform">
                  <Zap className="h-4 w-4 text-zion-cyan" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">AI Talent Matcher</p>
                  <p className="text-zion-slate-light text-sm">Find perfect matches instantly</p>
                </div>
              </Link>
              
              <Link
                to="/contact"
                className="flex items-center gap-3 p-3 rounded-lg bg-zion-cyan/20 hover:bg-zion-cyan/30 transition-colors group"
                onClick={() => setIsExpanded(false)}
              >
                <div className="p-2 rounded-full bg-zion-cyan/30 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-4 w-4 text-zion-purple" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">Get Support</p>
                  <p className="text-zion-slate-light text-sm">24/7 expert assistance</p>
                </div>
              </Link>
            </div>
            
            <div className="mt-4 pt-4 border-t border-zion-purple/20">
              <p className="text-zion-slate-light text-sm text-center">
                Need help? Our team is here for you
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-3">
        {/* Scroll to top button */}
        <motion.button
          onClick={scrollToTop}
          className="w-14 h-14 bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 group"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <ChevronUp className="h-6 w-6 text-white group-hover:text-zion-cyan transition-colors" />
        </motion.button>

        {/* Expandable CTA button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 bg-gradient-to-r from-zion-purple to-zion-purple-dark border border-zion-purple/30 hover:border-zion-purple/50 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 group"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <MessageCircle className="h-6 w-6 text-white group-hover:text-zion-cyan transition-colors" />
        </motion.button>
      </div>
    </div>
  );
}
