import React from 'react';

export const FeaturedListingsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Listings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and highly-rated services and solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">AI Chatbot Development</h3>
            <p className="text-gray-600 mb-4">Custom AI chatbots for customer support and engagement</p>
            <div className="text-zion-purple font-bold">$8,500</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Cloud Migration</h3>
            <p className="text-gray-600 mb-4">Seamless cloud infrastructure migration and optimization</p>
            <div className="text-zion-purple font-bold">$15,000</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Data Analytics Platform</h3>
            <p className="text-gray-600 mb-4">Comprehensive data analysis and visualization solutions</p>
            <div className="text-zion-purple font-bold">$12,000</div>
          </div>
        </div>
      </div>
    </section>
  );
};