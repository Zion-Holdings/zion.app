import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function ServiceDetails() {
  return (
    <>
      <Head>
        <title>Service-details</title>
        <meta name="description" content="Page for service-details functionality" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Service-details
            </h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p>Content for service-details page will be implemented here.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}