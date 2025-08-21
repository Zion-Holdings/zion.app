import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Layout from '../../components/layout/Layout';

export default function BlogIndex() {
  return (
    <Layout>
      <Head>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Latest insights and updates from Zion Tech Group" />
      </Head>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blog
          </h1>
          
          <p className="text-gray-300 text-lg mb-8">
            Our blog is currently being updated. Check back soon for the latest insights on AI, quantum computing, and emerging technologies.
          </p>
          
          <div className="bg-black/20 border border-gray-700/50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you the latest insights and updates from the world of cutting-edge technology.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}