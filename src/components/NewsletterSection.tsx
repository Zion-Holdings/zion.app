import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // In a real app, you would send this to your API
      console.log('Newsletter subscription:', email);
    }
  };

  if (isSubscribed) {
    return (
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Thank you for subscribing!
          </h2>
          <p className="text-blue-100 text-lg">
            You'll receive our latest updates and insights directly in your inbox.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated with Zion Tech Group
        </h2>
        <p className="text-blue-100 text-lg mb-8">
          Get the latest insights on AI, technology trends, and business solutions delivered to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" className="bg-white text-blue-600 hover:bg-gray-100">
            Subscribe
          </Button>
        </form>
        
        <p className="text-blue-200 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};