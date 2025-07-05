import React from 'react';
import SEO from '@/components/SEO';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Welcome to Zion"
        description="The world's first free marketplace dedicated to high-tech and artificial intelligence"
        keywords="AI marketplace, tech services, artificial intelligence"
      />
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Zion
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            The Future of Tech & AI Marketplace
          </p>
          <div className="space-y-4">
            <p className="text-lg">
              Publish, connect, and thrive — all in one place.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
