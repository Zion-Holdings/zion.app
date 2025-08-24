import type { NextPage } from 'next';
import Head from 'next/head';

const Services: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions including AI development, cloud architecture, web development, and more." />
      </Head>
      
      {/* Simple Services Page */}
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">Comprehensive technology solutions for modern businesses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-white mb-4">AI Development</h3>
              <p className="text-gray-400">Custom AI solutions and machine learning models</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Cloud Architecture</h3>
              <p className="text-gray-400">Scalable cloud infrastructure and solutions</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Web Development</h3>
              <p className="text-gray-400">Modern, responsive web applications</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-400">Comprehensive security solutions</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-white mb-4">IoT Platforms</h3>
              <p className="text-gray-400">Connected device solutions</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-400">End-to-end business modernization</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;