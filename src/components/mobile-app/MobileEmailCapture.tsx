
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEnqueueSnackbar } from '@/context';
import {logErrorToProduction} from '@/utils/productionLogger';

export const MobileEmailCapture: React.FC = () => {

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const enqueueSnackbar = useEnqueueSnackbar();

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const lastSubmit = useRef(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    const now = Date.now();
    if (now - lastSubmit.current < 1000) return;
    lastSubmit.current = now;

    const trimmed = email.trim();
    if (!EMAIL_REGEX.test(trimmed)) {
      enqueueSnackbar('Invalid email', { variant: 'error' });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed })
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        if (data.status === 'already_subscribed') {
          enqueueSnackbar(data.message || "You're already subscribed!", { variant: 'success' });
        } else {
          enqueueSnackbar(data.message || 'Successfully subscribed!', { variant: 'success' });
        }
        setIsSuccess(true);
        setEmail('');
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        logErrorToProduction('Newsletter subscription failed:', { data });
        enqueueSnackbar(data.error || 'Subscription failed. Please try again.', { variant: 'error' });
      }
    } catch (error: any) {
      logErrorToProduction('Error subscribing:', { data: error });
      enqueueSnackbar('Unable to subscribe right now. Please try again later.', { variant: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Early Access to New Features
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our mobile app updates and be the first to try new features before they're released to the public.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-zion-blue-dark/70 text-white border-zion-purple/30 placeholder:text-gray-400"
              required
            />
            <Button 
              type="submit" 
              disabled={isSubmitting || isSuccess}
              className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark font-medium"
            >
              {isSubmitting ? "Subscribing..." : isSuccess ? "Subscribed!" : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};
