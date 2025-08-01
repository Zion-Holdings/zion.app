import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
            {/* Admin dashboard content */}
          </motion.div>
        </div>
      </div>
    </>
  );
}