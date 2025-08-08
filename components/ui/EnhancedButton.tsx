import React from 'react';
import { motion } from 'framer-motion';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
};

export default function EnhancedButton({ variant = 'primary', fullWidth, className = '', children, ...props }: ButtonProps) {
  const base = 'button-hover inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants: Record<string, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 focus:ring-gray-500',
    ghost: 'bg-transparent text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500',
  };

  return (
    <motion.button whileTap={{ scale: 0.98 }} className={[base, variants[variant], fullWidth ? 'w-full' : '', className].join(' ')} {...props}>
      {children}
    </motion.button>
  );
}