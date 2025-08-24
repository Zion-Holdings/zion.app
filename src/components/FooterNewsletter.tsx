import React, { useState } from 'react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    setIsSubscribed(true);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <div className="text-green-400 text-sm">
        Thank you for subscribing!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-3 py-2 bg-zion-slate-dark border border-zion-slate rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-zion-cyan text-zion-slate-dark font-medium rounded-md hover:bg-zion-cyan-light transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}