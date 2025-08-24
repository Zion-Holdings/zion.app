
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  MessageCircle, 
  Search, 
  Users, 
  Zap, 
  X,
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function FloatingCTA() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickActions = [
    {
      icon: <Search className="h-5 w-5" />,
      label: 'Find Talent',
      link: '/talent',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: <Zap className="h-5 w-5" />,
      label: 'Services',
      link: '/services',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: 'Community',
      link: '/community',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: 'Support',
      link: '/contact',
      color: 'bg-orange-500 hover:bg-orange-600'
    }
  ];

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
    exit: { 
      scale: 0, 
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const actionVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    }),
    exit: { x: 20, opacity: 0 }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="relative">
          {/* Quick Actions */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="absolute bottom-16 right-0 mb-2 space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.label}
                    custom={index}
                    variants={actionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex items-center gap-3"
                  >
                    <Link
                      to={action.link}
                      className={`${action.color} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110`}
                      aria-label={action.label}
                    >
                      {action.icon}
                    </Link>
                    <motion.span
                      className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {action.label}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Floating Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label={isExpanded ? "Close quick actions" : "Open quick actions"}
              aria-expanded={isExpanded}
            >
              <AnimatePresence mode="wait">
                {isExpanded ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="expand"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronUp className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>

          {/* Pulse Effect */}
          <motion.div
            className="absolute inset-0 w-14 h-14 rounded-full bg-zion-purple/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
