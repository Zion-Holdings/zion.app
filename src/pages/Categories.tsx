import React from 'react';
import { SEO } from '@/components/SEO';

const Categories: React.FC = () => {
  return (
    <>
      <SEO 
        title="Categories - Zion Tech Group"
        description="Browse our service categories"
        canonical="https://ziontechgroup.com/categories"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Categories
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Browse our service categories
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-white">
                Our categories page is coming soon. You'll be able to browse our comprehensive service categories and find exactly what you need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;