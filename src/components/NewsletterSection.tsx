import React, { useState } from 'react';

export function NewsletterSection() {
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
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Thank You for Subscribing!</h2>
          <p className="text-white/90 text-lg mb-6">
            You'll receive the latest updates on AI services and tech solutions.
          </p>
          <button
            onClick={() => setIsSubscribed(false)}
            className="bg-white text-zion-blue px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
          >
            Subscribe Another Email
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Stay Ahead with Zion Tech Group</h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Get the latest insights on AI services, cybersecurity trends, and innovative tech solutions delivered to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg text-zion-blue placeholder-zion-blue/60 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            className="bg-white text-zion-blue px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
        
        <p className="text-white/70 text-sm mt-4">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </section>
  );
}