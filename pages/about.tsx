import React from 'react';
import Layout from '../components/layout/Layout';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-8">About Zion Tech Group</h1>
          <p className="text-xl text-gray-300 mb-8">
            We are a forward-thinking technology company dedicated to revolutionizing 
            industries through cutting-edge AI, quantum computing, and innovative solutions.
          </p>
          <p className="text-lg text-gray-400">
            Our mission is to accelerate human progress through revolutionary technology solutions 
            that solve the world's most complex challenges.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;