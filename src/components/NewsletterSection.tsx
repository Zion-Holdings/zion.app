
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GradientHeading } from '@/components/GradientHeading';
import { Mail, Bell, Zap, Shield, CheckCircle } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In production, you would send this to your newsletter service
      console.log('Newsletter subscription:', email);
      
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Zap,
      title: "Early Access",
      description: "Be the first to know about new features and services"
    },
    {
      icon: Bell,
      title: "Exclusive Updates",
      description: "Get insider information about AI and tech trends"
    },
    {
      icon: Shield,
      title: "No Spam",
      description: "We respect your inbox and only send valuable content"
    }
  ];

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-zion-cyan" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Welcome to Zion Tech Group!
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Thank you for subscribing! You'll receive our latest updates, exclusive content, and early access to new features.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark"
            >
              Subscribe Another Email
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-zion-cyan/10 text-zion-cyan px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Mail className="w-4 h-4" />
              Stay Updated
            </div>
            
            <GradientHeading className="text-4xl md:text-5xl mb-6">
              Never Miss the Future of Tech
            </GradientHeading>
            
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter and get exclusive insights into AI trends, tech innovations, 
              and early access to new features. Join 50,000+ tech professionals already staying ahead.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Newsletter Form */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg bg-white/10 backdrop-blur-sm border-zion-cyan/30 focus:border-zion-cyan focus:ring-zion-cyan text-white placeholder-zion-slate-light rounded-xl"
                  disabled={isSubmitting}
                />
              </div>
              
              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Subscribing...
                  </div>
                ) : (
                  'Subscribe to Newsletter'
                )}
              </Button>
            </form>
            
            <p className="text-xs text-zion-slate-light mt-4 text-center">
              By subscribing, you agree to our{' '}
              <a href="/privacy" className="text-zion-cyan hover:underline">Privacy Policy</a>
              {' '}and{' '}
              <a href="/terms" className="text-zion-cyan hover:underline">Terms of Service</a>.
              Unsubscribe at any time.
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-zion-slate-light mb-4">Trusted by leading companies worldwide</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-zion-slate-light text-sm font-medium">Microsoft</div>
              <div className="text-zion-slate-light text-sm font-medium">Google</div>
              <div className="text-zion-slate-light text-sm font-medium">Amazon</div>
              <div className="text-zion-slate-light text-sm font-medium">Meta</div>
              <div className="text-zion-slate-light text-sm font-medium">Netflix</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
