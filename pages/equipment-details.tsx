import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function EquipmentDetails() {
  return (
    <>
      <Head>
        <title>Equipment-details</title>
        <meta name="description" content="Page for equipment-details functionality" />
      </Head>
      
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Equipment-details
            </h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p>Content for equipment-details page will be implemented here.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}