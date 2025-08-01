import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Analytics() {
  return (
    <>
      <Head>
        <title>Analytics</title>
      </Head>
      
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h1 className="text-3xl font-bold mb-8">Analytics</h1>
            {/* Analytics content */}
          </motion.div>
        </div>
      </div>
    </>
  );
}