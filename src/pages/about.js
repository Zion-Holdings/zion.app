import React from 'react';
import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Zion - AI-Powered Marketplace</title>
        <meta name="description" content="Learn about Zion's mission to revolutionize the marketplace industry with AI-powered solutions." />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12">About Zion</h1>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6">Empowering businesses with AI-powered marketplace solutions</p>
              
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-700 mb-6">Leading the future of digital commerce</p>
              
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Innovation","Trust","Excellence","Growth"].map((value, index) => (
                  <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
                    <span className="font-semibold text-blue-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;