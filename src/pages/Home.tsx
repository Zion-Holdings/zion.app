
import React from 'react';
import { motion } from 'framer-motion';

export function Home() {
  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Pioneering the future of technology with revolutionary AI consciousness, 
            quantum computing, and autonomous solutions that transform businesses worldwide.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
