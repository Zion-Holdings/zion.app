import React from 'react';
import { Link } from 'react-router-dom';

export function ITServiceRequestHero() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Zion Tech Group
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          The world's first free marketplace dedicated to high-tech and artificial intelligence
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/request-quote"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Request Quote
          </Link>
          <Link
            to="/marketplace"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Explore Marketplace
          </Link>
        </div>
      </div>
    </section>
  );
}