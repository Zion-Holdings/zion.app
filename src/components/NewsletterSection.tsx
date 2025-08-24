import React from 'react';

export const NewsletterSection: React.FC = () => {
  return (
    <section className="py-16 bg-zion-purple">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated with Tech Trends
        </h2>
        <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
          Get the latest insights on AI, technology, and business innovation delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-zion-cyan"
          />
          <button className="bg-zion-cyan text-white px-6 py-3 rounded-lg hover:bg-zion-cyan-dark transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};