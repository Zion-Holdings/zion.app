import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In a real app, you would send this to your backend
      console.log('Waitlist signup:', email);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">🎉 You're on the list!</CardTitle>
              <CardDescription>
                Thank you for joining our waitlist. We'll notify you as soon as new features are available.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="w-full"
              >
                Join Another Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Be First to Experience Our Latest Innovations
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our exclusive waitlist for early access to cutting-edge AI services, 
            advanced IT solutions, and revolutionary micro SAAS platforms.
          </p>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Join the Waitlist</CardTitle>
              <CardDescription>
                Get priority access to our newest services and exclusive early-bird pricing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" className="px-8">
                    Join Waitlist
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  We'll only use your email to send you updates about new services and early access opportunities.
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Early Access</h3>
              <p className="text-muted-foreground">Be among the first to try our newest innovations</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="text-lg font-semibold mb-2">Exclusive Pricing</h3>
              <p className="text-muted-foreground">Special rates for early adopters and waitlist members</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="text-lg font-semibold mb-2">Priority Support</h3>
              <p className="text-muted-foreground">Direct access to our expert team and dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}