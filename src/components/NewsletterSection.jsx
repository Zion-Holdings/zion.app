import React from 'react';

export function NewsletterSection() {
  return (
    <section className="bg-zion-blue-dark py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated with Zion Tech Group
        </h2>
        <p className="text-zion-cyan mb-8 max-w-2xl mx-auto">
          Get the latest insights on AI, IT services, and innovative solutions delivered to your inbox.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-zion-blue-light bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            />
            <button className="px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}