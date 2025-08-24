import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        className="text-center p-4 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-lg border border-zion-cyan/30"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
        <p className="text-sm text-zion-cyan font-medium">Subscribed!</p>
      </motion.div>
    );
  }

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="space-y-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full pl-10 pr-4 py-2 bg-zion-blue/20 border border-zion-blue-light/30 focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan/20 rounded-md text-white placeholder:text-zion-slate-light/60 focus:outline-none transition-all duration-300 text-sm"
          required
        />
      </div>
      
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white text-sm font-medium rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <span>Subscribing...</span>
          </>
        ) : (
          <>
            <span>Subscribe</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </motion.button>
    </motion.form>
  );
}