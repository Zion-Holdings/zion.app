import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

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
      
      // Reset subscription status after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
            required
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300"
        >
          <Send className="w-4 h-4" />
          Subscribe
        </button>
      </form>
      
      {isSubscribed && (
        <div className="text-zion-cyan text-sm text-center">
          Thank you for subscribing!
        </div>
      )}
      
      <p className="text-xs text-zion-slate-light text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}