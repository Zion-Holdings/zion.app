import React from 'react';
import { SEO } from '@/components/SEO';

const Analytics: React.FC = () => {
  return (
    <>
      <SEO 
        title="Analytics - Zion Tech Group"
        description="View analytics and insights about your projects"
        canonical="https://ziontechgroup.com/analytics"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Analytics
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              View analytics and insights about your projects
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-white">
                Our analytics page is coming soon. You'll be able to view comprehensive analytics and insights about your projects and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;