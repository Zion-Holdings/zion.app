import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const ProductsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Products - Zion Tech Group</title>
        <meta name="description" content="Innovative technology products and solutions from Zion Tech Group" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Products</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover our cutting-edge technology products and solutions designed to transform your business.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">AI Automation Suite</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive artificial intelligence solutions for business process automation.
            </p>
            <div className="text-blue-600 font-medium">Learn More →</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Cloud Infrastructure</h3>
            <p className="text-gray-600 mb-4">
              Scalable cloud solutions for modern enterprise needs.
            </p>
            <div className="text-blue-600 font-medium">Learn More →</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Data Analytics Platform</h3>
            <p className="text-gray-600 mb-4">
              Advanced analytics and insights for data-driven decision making.
            </p>
            <div className="text-blue-600 font-medium">Learn More →</div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            This page is automatically generated. Content will be populated by automation systems.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;