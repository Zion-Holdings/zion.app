
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-center mb-8">
          Your premier technology solutions provider
        </p>
        <div className="text-center">
          <a 
            href="/services" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Our Services
          </a>
        </div>
      </div>
    </div>
  );
}
