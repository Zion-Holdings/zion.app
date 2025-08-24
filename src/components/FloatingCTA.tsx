
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, MessageCircle, ChevronUp, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-zion-purple to-zion-purple-dark border border-zion-purple-light/30 rounded-2xl p-6 shadow-2xl shadow-zion-purple/25 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold text-lg">Need Help?</h3>
                <button
                  onClick={handleClose}
                  className="text-zion-slate-light hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <p className="text-zion-slate-light mb-4 text-sm">
                Get instant support or explore our marketplace
              </p>
              
              <div className="space-y-3">
                <Link to="/contact">
                  <Button 
                    className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark font-medium transition-all duration-300 hover:scale-105"
                    size="sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                </Link>
                
                <Link to="/marketplace">
                  <Button 
                    variant="outline" 
                    className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark font-medium transition-all duration-300 hover:scale-105"
                    size="sm"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Explore Marketplace
                  </Button>
                </Link>
              </div>
              
              <button
                onClick={handleExpand}
                className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-zion-purple rounded-full flex items-center justify-center hover:bg-zion-purple-light transition-colors"
              >
                <ChevronUp className="w-3 h-3 text-white" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <button
                onClick={handleExpand}
                className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full shadow-2xl shadow-zion-purple/25 hover:shadow-zion-purple/40 transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-zion-purple-light/30"
              >
                <MessageCircle className="w-7 h-7 text-white" />
              </button>
              
              {/* Pulse animation */}
              <div className="absolute inset-0 w-16 h-16 bg-zion-purple rounded-full animate-ping opacity-20"></div>
              
              {/* Notification dot */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-zion-cyan rounded-full border-2 border-zion-blue-dark animate-pulse"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
