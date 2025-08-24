import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star } from 'lucide-react';

export const WaitlistSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [waitlistPosition, setWaitlistPosition] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Simulate getting waitlist position
      setWaitlistPosition(Math.floor(Math.random() * 1000) + 1);
      setEmail('');
      console.log('Waitlist signup:', email);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              You're on the Waitlist!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your interest in Zion Tech Group. We'll notify you as soon as we have updates.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600 mb-2">Your waitlist position:</p>
              <p className="text-2xl font-bold text-purple-600">#{waitlistPosition}</p>
            </div>
            <p className="text-sm text-gray-500">
              We're currently in beta and will be rolling out access gradually. 
              Follow us on social media for updates!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Waitlist
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Be among the first to experience our revolutionary AI-powered business solutions. 
            Sign up for early access and exclusive updates.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                Join Waitlist
              </Button>
            </div>
          </form>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">2,500+</h3>
              <p className="text-sm text-gray-600">People waiting</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Q1 2024</h3>
              <p className="text-sm text-gray-600">Expected launch</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Early Access</h3>
              <p className="text-sm text-gray-600">Exclusive features</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="text-purple-600 border-purple-600">
              AI-Powered
            </Badge>
            <Badge variant="outline" className="text-blue-600 border-blue-600">
              Enterprise Ready
            </Badge>
            <Badge variant="outline" className="text-green-600 border-green-600">
              Secure
            </Badge>
            <Badge variant="outline" className="text-orange-600 border-orange-600">
              Scalable
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};