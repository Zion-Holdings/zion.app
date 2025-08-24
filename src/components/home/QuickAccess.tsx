import React from 'react';
import { Link } from 'react-router-dom';

export function QuickAccess() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/marketplace" className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Marketplace</h3>
            <p className="text-gray-600">Browse products and services</p>
          </Link>
          <Link to="/services" className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Services</h3>
            <p className="text-gray-600">Find professional services</p>
          </Link>
          <Link to="/talent" className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Talent</h3>
            <p className="text-gray-600">Connect with experts</p>
          </Link>
        </div>
      </div>
    </section>
  );
}