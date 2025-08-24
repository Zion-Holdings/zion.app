import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, MessageCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingActionButtonProps {
  onScrollToTop?: () => void;
  onContact?: () => void;
  onCall?: () => void;
  onEmail?: () => void;
}

export function FloatingActionButton({
  onScrollToTop,
  onContact,
  onCall,
  onEmail
}: FloatingActionButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    onScrollToTop?.();
    setIsExpanded(false);
  };

  const handleContact = () => {
    onContact?.();
    setIsExpanded(false);
  };

  const handleCall = () => {
    onCall?.();
    setIsExpanded(false);
  };

  const handleEmail = () => {
    onEmail?.();
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {/* Contact button */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Button
                onClick={handleContact}
                className="w-12 h-12 rounded-full bg-zion-purple hover:bg-zion-purple-dark shadow-lg"
                size="icon"
              >
                <MessageCircle className="w-5 h-5" />
              </Button>
            </motion.div>

            {/* Call button */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Button
                onClick={handleCall}
                className="w-12 h-12 rounded-full bg-zion-cyan hover:bg-zion-cyan-dark shadow-lg"
                size="icon"
              >
                <Phone className="w-5 h-5" />
              </Button>
            </motion.div>

            {/* Email button */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                onClick={handleEmail}
                className="w-12 h-12 rounded-full bg-zion-blue hover:bg-zion-blue-dark shadow-lg"
                size="icon"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative"
      >
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple-dark hover:to-zion-blue-dark shadow-2xl shadow-zion-purple/25"
          size="icon"
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </motion.div>
        </Button>

        {/* Scroll to top tooltip */}
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-zion-slate text-white text-sm rounded-lg whitespace-nowrap shadow-lg"
          >
            Scroll to top
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zion-slate"></div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}