import React from 'react';

export const FeaturedListingsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Featured Listings
          </h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
            Discover our handpicked selection of top services and solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for featured listings */}
          <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-6 border border-zion-blue-light/30">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">
                Coming Soon
              </h3>
              <p className="text-zion-slate-light">
                Featured listings will be displayed here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};