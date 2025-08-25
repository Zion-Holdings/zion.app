<<<<<<< HEAD
import React, { useState } from 'react';

export const FooterNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h3>
      <p className="text-gray-300 mb-4">
        Stay updated with the latest tech news and updates from Zion Tech Group.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-3 py-2 rounded text-gray-900"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};
=======


export function FooterNewsletter() {
  return (
    <div className="mt-6">
      <h4 className="text-white font-semibold mb-3 text-sm">Newsletter</h4>
      <p className="text-zion-slate-light mb-3 text-xs">
        Stay updated with the latest tech and AI opportunities.
      </p>
      <div className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-3 py-2 text-sm bg-zion-blue-light border border-zion-blue rounded-l-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
        />
        <button className="px-4 py-2 bg-zion-cyan hover:bg-zion-cyan-dark text-white text-sm font-medium rounded-r-lg transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  );
}
>>>>>>> e338169a4e366a68d7d32ebaabd769477f9baeac
