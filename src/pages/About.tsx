
import React from 'react';

export function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            About Zion Tech Group
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Zion Tech Group is a leading technology company dedicated to providing innovative solutions 
              for businesses and individuals. We specialize in comprehensive IT services, micro-SaaS solutions, 
              and cutting-edge technology consulting.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground mb-6">
              To empower businesses with technology solutions that drive growth, efficiency, and innovation. 
              We believe in creating sustainable, scalable solutions that adapt to the evolving needs of our clients.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Our Vision
            </h2>
            <p className="text-muted-foreground mb-6">
              To be the trusted technology partner for businesses worldwide, known for our expertise, 
              reliability, and commitment to excellence.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Core Values
            </h2>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Innovation and creativity in problem-solving</li>
              <li>Excellence in service delivery</li>
              <li>Integrity and transparency in all dealings</li>
              <li>Customer-centric approach</li>
              <li>Continuous learning and improvement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
