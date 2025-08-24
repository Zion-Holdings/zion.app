
import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          About Zion Tech Group
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-8">
          Leading technology solutions provider
        </p>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-4">
            Zion Tech Group is a forward-thinking technology company dedicated to delivering innovative solutions 
            that drive business growth and digital transformation.
          </p>
          <p className="text-lg">
            We're currently updating our website with more detailed information about our company, 
            team, and mission. Please check back soon.
          </p>
        </div>
      </div>
    </div>
  );
}
