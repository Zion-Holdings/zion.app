import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Contact Us
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-8">
          Get in touch with our team
        </p>
        <div className="max-w-md mx-auto">
          <p className="text-center mb-4">
            Email: info@ziontechgroup.com
          </p>
          <p className="text-center">
            We're currently updating our contact form. Please email us directly.
          </p>
        </div>
      </div>
    </div>
  );
}
