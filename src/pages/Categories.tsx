import React from 'react';
import { SEO } from '@/components/SEO';

const Categories: React.FC = () => {
  return (
    <>
      <SEO 
        title="Categories - Zion Tech Group" 
        description="Explore our comprehensive categories of technology services and solutions."
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Categories
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive categories of technology services and solutions.
              Find exactly what you need for your business.
            </p>
          </div>
          
          <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-blue-light/30">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-zion-slate-light mb-6">
                Our categories page is currently under development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;