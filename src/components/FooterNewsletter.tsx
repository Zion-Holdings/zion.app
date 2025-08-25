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
