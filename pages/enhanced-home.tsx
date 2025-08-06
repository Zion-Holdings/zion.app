
import React from 'react';
import Head from 'next/head';
import EnhancedCard from '../components/ui/EnhancedCard';
import EnhancedButton from '../components/ui/EnhancedButton';

export default function EnhancedHome() {
  return (
    <>
      <Head>
        <title>Enhanced Home - Bolt.new Zion</title>
        <meta name="description" content="Enhanced home page with modern UI" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Bolt.new Zion
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Advanced automation and development solutions
            </p>
            <EnhancedButton size="lg">
              Get Started
            </EnhancedButton>
          </section>
          
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EnhancedCard 
              title="Automation"
              description="Advanced automation systems for your development workflow."
              icon="⚡"
              color="blue"
            />
            
            <EnhancedCard 
              title="Development"
              description="Modern development tools and frameworks."
              icon="💻"
              color="purple"
            />
            
            <EnhancedCard 
              title="Innovation"
              description="Cutting-edge solutions for tomorrow's challenges."
              icon="🚀"
              color="green"
            />
          </section>
        </main>
      </div>
    </>
  );
}
