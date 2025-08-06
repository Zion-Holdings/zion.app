import React from 'react';
import Head from 'next/head';
import Layout from ';../components/Layout';
import { motion } from ';framer-motion';

const AIPoweredRecommendation = () => {
  return (
    <Layout>
      <Head>
        <title>AI Powered Recommendation - Zion App</title>
        <meta name="description" content="Smart AI recommendation engines that personalize experiences and drive engagement." />
        <meta name="keywords" content="ai-powered-recommendation, AI, automation, technology, solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      
      <div className="""relative z-10 container-responsive py-8">
        {/* Background Effects */}
        <div className="""fixed inset-0 z-0">
          <div className="""absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="""absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
        
        <section className="""relative py-40 px-4 sm:px-6 lg:px-8">
          <div className="""max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="""text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Powered Recommendation
              </h1>
              <p className="""text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Smart AI recommendation engines that personalize experiences and drive engagement.
              </p>
              <div className="""flex flex-col sm:flex-row gap-4 justify-center">
                <button className="""bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
                <button className="""border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>
        
        <section className="""py-40 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="""max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="""text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
              <p className="""text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the powerful capabilities that make our AI-powered recommendation solution stand out
              </p>
            </motion.div>
            
            <div className="""grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="""p-6 bg-white rounded-lg shadow-lg border border-gray-200"
              >
                <div className="""w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="""w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="""text-xl font-semibold text-gray-900 mb-2">Advanced AI Capabilities</h3>
                <p className="""text-gray-600">Leverage cutting-edge AI technology for superior results</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="""p-6 bg-white rounded-lg shadow-lg border border-gray-200"
              >
                <div className="""w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="""w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="""text-xl font-semibold text-gray-900 mb-2">Real-time Processing</h3>
                <p className="""text-gray-600">Process data and make decisions in real-time</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="""p-6 bg-white rounded-lg shadow-lg border border-gray-200"
              >
                <div className="""w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="""w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="""text-xl font-semibold text-gray-900 mb-2">Personalized Insights</h3>
                <p className="""text-gray-600">Deliver tailored recommendations based on user behavior</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIPoweredRecommendation;