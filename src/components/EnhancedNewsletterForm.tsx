import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

export function EnhancedNewsletterForm() {
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
        className="text-center p-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl border border-zion-cyan/30"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Welcome to Zion!</h3>
        <p className="text-zion-slate-light">
          You're now subscribed to our newsletter. Check your email for confirmation.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full pl-10 pr-4 py-4 bg-zion-blue-dark/50 border border-zion-blue-light/30 focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 rounded-lg text-white placeholder:text-zion-slate-light/60 focus:outline-none transition-all duration-300"
            required
          />
        </div>
        
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Subscribing...</span>
            </>
          ) : (
            <>
              <span>Subscribe</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </motion.button>
      </div>
      
      <p className="text-xs text-zion-slate-light text-center mt-4 max-w-md mx-auto">
        By subscribing, you agree to receive updates about tech opportunities, AI innovations, and marketplace news. 
        You can unsubscribe at any time.
      </p>
    </motion.form>
  );
}