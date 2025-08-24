import React, { useState } from 'react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // In a real app, you would send this to your backend
      console.log('Newsletter subscription:', email);
    }
  };

  if (isSubscribed) {
    return (
      <div className="text-center py-8">
        <p className="text-zion-cyan font-medium">Thank you for subscribing!</p>
        <button
          onClick={() => setIsSubscribed(false)}
          className="text-zion-slate-light hover:text-zion-cyan text-sm mt-2"
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
      <p className="text-zion-slate-light text-sm mb-4">
        Get the latest updates on AI services and tech solutions.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-3 py-2 bg-zion-blue border border-zion-blue-light rounded text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-zion-cyan text-white rounded hover:bg-zion-cyan/90 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}