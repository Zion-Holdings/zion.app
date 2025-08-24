import React, { useState } from 'react';
<<<<<<< HEAD
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Mail } from 'lucide-react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <div className="text-center p-4 bg-zion-purple/10 rounded-lg border border-zion-purple/20">
        <p className="text-zion-cyan text-sm font-medium">
          Thank you for subscribing! 🎉
        </p>
        <p className="text-zion-slate-light text-xs mt-1">
          You'll receive our latest updates soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan"
          required
        />
      </div>
      <Button
        type="submit"
        disabled={isLoading || !email.trim()}
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  );
}
=======

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
>>>>>>> b0227f6a3f6a80df96e210611ae67bdcdc943ae0
