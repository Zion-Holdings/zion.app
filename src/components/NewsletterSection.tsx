import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Thank you for subscribing!
          </h2>
          <p className="text-muted-foreground mb-6">
            You'll receive our latest updates and insights directly to your inbox.
          </p>
          <Button
            onClick={() => setIsSubscribed(false)}
            variant="outline"
          >
            Subscribe Another Email
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Stay Updated with Zion Tech Group
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get the latest insights on AI services, IT solutions, and micro SAAS innovations. 
          Join our community of tech enthusiasts and professionals.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit">
            Subscribe
          </Button>
        </form>
        
        <p className="text-xs text-muted-foreground mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}