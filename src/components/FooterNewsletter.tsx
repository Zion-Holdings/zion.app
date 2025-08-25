<<<<<<< HEAD


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
=======
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const FooterNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('Thank you for subscribing! We\'ll keep you updated with the latest tech insights.');
      setEmail('');
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
      <p className="text-sm text-gray-300">
        Get the latest insights on AI, cybersecurity, and tech innovation.
      </p>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/20"
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
      
      {message && (
        <p className={`text-sm ${message.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </div>
  );
};
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
