import React from 'react';
import { Link } from 'react-router-dom';

export function FeaturedListingsSection() {
  const featuredListings = [
    {
      id: '1',
      title: 'AI-Powered Chatbot Development',
      description: 'Custom chatbot solutions for your business',
      price: '$2,500',
      category: 'AI Development'
    },
    {
      id: '2',
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations',
      price: '$1,800',
      category: 'Cybersecurity'
    },
    {
      id: '3',
      title: 'Cloud Migration Services',
      description: 'Seamless migration to cloud infrastructure',
      price: '$3,200',
      category: 'Cloud Services'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredListings.map((listing) => (
            <div key={listing.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
              <p className="text-gray-600 mb-4">{listing.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{listing.category}</span>
                <span className="text-lg font-bold text-blue-600">{listing.price}</span>
              </div>
              <Link
                to={`/listing/${listing.id}`}
                className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}