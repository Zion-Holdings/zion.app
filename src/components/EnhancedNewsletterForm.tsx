import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef } from "react";
import { Mail } from 'lucide-react';

import { useToast } from "@/hooks/use-toast";
import {logErrorToProduction} from '@/utils/productionLogger';

export function EnhancedNewsletterForm() {

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const lastSubmit = useRef(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const now = Date.now();
    if (now - lastSubmit.current < 1000) return;
    lastSubmit.current = now;

    const trimmed = email.trim();
    if (!EMAIL_REGEX.test(trimmed)) {
      toast.error("Invalid email");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        // Handle different success statuses
        if (data.status === 'already_subscribed') {
          toast.success(data.message || "You're already subscribed!");
        } else {
          toast.success(data.message || "Thanks for subscribing!");
        }
        setIsSubmitted(true);
        setEmail("");
      } else {
        // Handle error responses
        logErrorToProduction('Newsletter subscription failed:', { data: data });
        toast.error(data.error || "Subscription failed. Please try again.");
      }
    } catch (err: any) {
      logErrorToProduction('Newsletter subscription error:', { data: err });
      toast.error("Unable to subscribe right now. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3">
          <Mail className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Stay Updated</h3>
          <p className="text-zion-slate-light text-sm">Get exclusive offers, trending AI news, and early access to best deals</p>
        </div>
      </div>
      
      {isSubmitted ? (
        <div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40">
          <p className="text-white font-medium">Thank you for subscribing!</p>
          <p className="text-zion-slate-light mt-1">We&apos;ll keep you updated with the latest from Zion.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">
          <label htmlFor="enhanced-newsletter-email" className="sr-only">
            Email address for newsletter subscription
          </label>
          <Input
            type="email"
            id="enhanced-newsletter-email"
            name="email"
            placeholder="Enter your email"
            className="flex-grow bg-zion-blue-dark text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      )}
      
      <div className="mt-4 flex items-center text-xs text-zion-slate-light">
        <div className="flex -space-x-1 mr-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan">
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <span>Join 10,000+ tech professionals who already subscribe</span>
      </div>
    </div>
  );
}