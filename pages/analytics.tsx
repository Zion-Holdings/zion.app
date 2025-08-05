import React from 'react';
// import ModernLayout from '../components/layout/ModernLayout';

import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Analytics() {
  return (
    <div>
    return (
    <>
      <Head>
        <title>Analytics</title>
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>
      
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8 container-responsive container-responsive">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg:shadow-lg:p-8"
          >
            <h1 className="text-3xl:font-bold mb-8 text-responsive-lg:text-responsive-lg">Analytics</h1>
            {/* Analytics content */}
          </motion.div>
        </div>
      </div>
    </>
  
  </div>

  </div>
);
}