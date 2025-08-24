
import React from 'react';

export function Home() {
  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl font-bold text-center mb-8">
          Zion Tech Group
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          The Future of Tech Services - Discover the world's premier marketplace for cutting-edge AI services, 
          technology solutions, and innovative micro SAAS offerings.
        </p>
        <div className="text-center">
          <button className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Explore Services
          </button>
        </div>
      </div>
    </div>
  );
}
