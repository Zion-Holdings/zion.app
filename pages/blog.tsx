import React from 'react';
import Layout from '../components/layout/Layout';

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-8">Blog</h1>
          <p className="text-xl text-gray-300 mb-8">
            Latest insights, updates, and thought leadership from Zion Tech Group.
          </p>
          <p className="text-lg text-gray-400">
            Stay informed about the latest developments in AI, quantum computing, 
            space technology, and cybersecurity.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
