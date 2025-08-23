import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, Phone, Calendar, 
  FileText, X, Plus,
  Zap, Star, Globe, ArrowRight
} from 'lucide-react';

interface Action {
  id: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  color: string;
  action: () => void;
}

interface FloatingActionMenuProps {
  className?: string;
}

const FloatingActionMenu: React.FC<FloatingActionMenuProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAction, setActiveAction] = useState<string | null>(null);

  const actions: Action[] = [
    {
      id: 'contact',
      icon: <Phone className="w-5 h-5" />,
      label: 'Contact Us',
      description: 'Get in touch with our experts',
      color: 'from-cyan-500 to-blue-600',
      action: () => window.location.href = '/contact'
    },
    {
      id: 'demo',
      icon: <Calendar className="w-5 h-5" />,
      label: 'Schedule Demo',
      description: 'Book a personalized demo',
      color: 'from-purple-500 to-pink-600',
      action: () => window.location.href = '/demo'
    },
    {
      id: 'quote',
      icon: <FileText className="w-5 h-5" />,
      label: 'Get Quote',
      description: 'Request a custom quote',
      color: 'from-emerald-500 to-teal-600',
      action: () => window.location.href = '/quote'
    },
    {
      id: 'support',
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'Live Chat',
      description: 'Chat with our support team',
      color: 'from-orange-500 to-red-600',
      action: () => window.location.href = '/support'
    }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActiveAction(null);
    }
  };

  const handleActionClick = (action: Action) => {
    setActiveAction(action.id);
    setTimeout(() => {
      action.action();
      setActiveAction(null);
    }, 300);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Main Floating Button */}
      <motion.button
        onClick={toggleMenu}
        className={`w-16 h-16 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
          isOpen 
            ? 'bg-gradient-to-r from-red-500 to-pink-600 shadow-red-500/40' 
            : 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-cyan-500/25 hover:shadow-cyan-500/40'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Plus className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Action Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
            className="absolute bottom-20 right-0 w-80 bg-gray-800/95 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-2xl shadow-black/50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-700/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
              </div>
              <p className="text-sm text-gray-400">Get started with Zion Tech Group in seconds</p>
            </div>

            {/* Actions List */}
            <div className="p-4 space-y-3">
              {actions.map((action, index) => (
                <motion.button
                  key={action.id}
                  onClick={() => handleActionClick(action)}
                  className={`w-full p-4 rounded-xl border border-gray-700/50 hover:border-${action.color.split('-')[1]}-500/50 transition-all duration-300 group text-left ${
                    activeAction === action.id ? 'bg-gray-700/50' : 'bg-gray-800/30 hover:bg-gray-700/30'
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {action.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {action.label}
                      </h4>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {action.description}
                      </p>
                    </div>
                    <div className="text-gray-500 group-hover:text-cyan-400 transition-colors duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-900/50 border-t border-gray-700/50">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>24/7 Available</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>98% Satisfaction</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingActionMenu;