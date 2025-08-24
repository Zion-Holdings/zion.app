import React from 'react';

export const QuickAccess: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Quick Access
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started quickly with our most popular services and solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-zion-purple hover:text-white transition-colors cursor-pointer">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="font-semibold mb-2">AI Services</h3>
            <p className="text-sm">Chatbots, ML, Analytics</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-zion-purple hover:text-white transition-colors cursor-pointer">
            <div className="text-3xl mb-4">☁️</div>
            <h3 className="font-semibold mb-2">Cloud Solutions</h3>
            <p className="text-sm">Migration, DevOps, Security</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-zion-purple hover:text-white transition-colors cursor-pointer">
            <div className="text-3xl mb-4">💻</div>
            <h3 className="font-semibold mb-2">IT Services</h3>
            <p className="text-sm">Support, Maintenance, Consulting</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-zion-purple hover:text-white transition-colors cursor-pointer">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="font-semibold mb-2">Startup Solutions</h3>
            <p className="text-sm">MVP, Growth, Scaling</p>
          </div>
        </div>
      </div>
    </section>
  );
};