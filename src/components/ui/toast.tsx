import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message?: string;
  duration?: number;
  onClose: (id: string) => void;
}

const toastVariants = {
  initial: { 
    opacity: 0, 
    x: 300, 
    scale: 0.8 
  },
  animate: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: { 
    opacity: 0, 
    x: 300, 
    scale: 0.8,
    transition: {
      duration: 0.2
    }
  }
};

const toastIcons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle
};

const toastColors = {
  success: 'bg-green-500 border-green-400 text-green-50',
  error: 'bg-red-500 border-red-400 text-red-50',
  info: 'bg-blue-500 border-blue-400 text-blue-50',
  warning: 'bg-yellow-500 border-yellow-400 text-yellow-50'
};

const iconColors = {
  success: 'text-green-100',
  error: 'text-red-100',
  info: 'text-blue-100',
  warning: 'text-yellow-100'
};

export function Toast({ id, type, title, message, duration = 5000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose(id), 200);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, id, onClose]);

  const Icon = toastIcons[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={toastVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`relative overflow-hidden rounded-lg border shadow-lg backdrop-blur-sm ${toastColors[type]}`}
          style={{ minWidth: '320px', maxWidth: '400px' }}
        >
          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-white/30"
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            transition={{ duration: duration / 1000, ease: "linear" }}
          />
          
          <div className="flex items-start p-4">
            <div className="flex-shrink-0">
              <Icon className={`w-5 h-5 ${iconColors[type]}`} />
            </div>
            
            <div className="ml-3 flex-1">
              <h4 className="text-sm font-semibold">{title}</h4>
              {message && (
                <p className="mt-1 text-sm opacity-90">{message}</p>
              )}
            </div>
            
            <div className="ml-4 flex-shrink-0">
              <button
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(() => onClose(id), 200);
                }}
                className="inline-flex rounded-md p-1.5 opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Toast container to manage multiple toasts
export function ToastContainer() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (toast: Omit<ToastProps, 'id' | 'onClose'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: ToastProps = {
      ...toast,
      id,
      onClose: removeToast
    };
    setToasts(prev => [...prev, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  // Expose addToast method globally for easy access
  useEffect(() => {
    (window as any).showToast = addToast;
    return () => {
      delete (window as any).showToast;
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 space-y-4">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
}

// Utility functions for easy toast usage
export const showToast = {
  success: (title: string, message?: string) => {
    if (typeof window !== 'undefined' && (window as any).showToast) {
      (window as any).showToast({ type: 'success', title, message });
    }
  },
  error: (title: string, message?: string) => {
    if (typeof window !== 'undefined' && (window as any).showToast) {
      (window as any).showToast({ type: 'error', title, message });
    }
  },
  info: (title: string, message?: string) => {
    if (typeof window !== 'undefined' && (window as any).showToast) {
      (window as any).showToast({ type: 'info', title, message });
    }
  },
  warning: (title: string, message?: string) => {
    if (typeof window !== 'undefined' && (window as any).showToast) {
      (window as any).showToast({ type: 'warning', title, message });
    }
  }
};
