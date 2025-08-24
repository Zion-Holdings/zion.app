import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function NewsletterSection() {
  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated with Zion Tech
        </h2>
        <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
          Get the latest updates on AI technology, marketplace trends, and exclusive opportunities delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1"
          />
          <Button className="bg-zion-purple hover:bg-zion-purple-dark">
            Subscribe
          </Button>
        </div>
        <p className="text-sm text-zion-slate-light mt-4">
          No spam, unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}