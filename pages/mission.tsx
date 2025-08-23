import React from 'react';
import Layout from '../components/layout/Layout';

const MissionPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-8">Our Mission</h1>
          <p className="text-xl text-gray-300 mb-8">
            To accelerate human progress through revolutionary technology solutions 
            that solve the world's most complex challenges.
          </p>
          <p className="text-lg text-gray-400">
            We envision a future where AI, quantum computing, and space technology 
            work seamlessly together to unlock unprecedented possibilities for humanity.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default MissionPage;