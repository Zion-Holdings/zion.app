import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your newsletter service
      console.log('Newsletter subscription:', email);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset the success message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
      
      {isSubscribed && (
        <p className="text-zion-cyan text-sm mt-2">
          Thank you for subscribing! Check your email for confirmation.
        </p>
      )}
      
      <p className="text-zion-slate-light text-xs mt-3">
        By subscribing, you agree to receive updates about Zion Tech Group. 
        You can unsubscribe at any time.
      </p>
    </div>
  );
}