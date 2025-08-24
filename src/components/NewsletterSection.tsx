import React from 'react';

export const NewsletterSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Stay Updated
        </h2>
        <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest updates on AI, IT services, and tech innovations.
        </p>
        
        <div className="max-w-md mx-auto">
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-zion-blue-light/20 border border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
            />
            <button className="px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark font-medium rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};