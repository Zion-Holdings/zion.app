import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export function WaitlistSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist signup
    console.log('Waitlist signup:', email);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-cyan">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Join the Waitlist
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Be among the first to experience the future of AI marketplace
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            required
          />
          <Button type="submit" className="bg-white text-zion-purple hover:bg-gray-100">
            Join
          </Button>
        </form>
      </div>
    </section>
  );
}