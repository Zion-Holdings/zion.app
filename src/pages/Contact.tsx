import React from 'react';
import { SEO } from "@/components/SEO";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Us - Zion Tech Group" 
        description="Get in touch with our team for any questions or support."
        keywords="contact, support, help, Zion Tech"
        canonical="https://ziontechgroup.com/contact"
      />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-zion-blue mb-8">Contact Us</h1>
        <p className="text-lg text-zion-slate-light mb-8">
          Get in touch with our team for any questions or support.
        </p>
        
        <div className="max-w-2xl">
          <div className="mb-6">
            <label className="block text-zion-slate mb-2">Name</label>
            <input 
              type="text" 
              className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate"
              placeholder="Your name"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-zion-slate mb-2">Email</label>
            <input 
              type="email" 
              className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate"
              placeholder="your@email.com"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-zion-slate mb-2">Message</label>
            <textarea 
              className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate h-32"
              placeholder="Your message..."
            />
          </div>
          
          <button className="bg-zion-blue hover:bg-zion-blue-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
