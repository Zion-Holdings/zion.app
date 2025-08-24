import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function FeatureHighlights() {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Matching",
      description: "Advanced algorithms connect you with the perfect talent or service for your needs",
      category: "Core Feature"
    },
    {
      icon: "🔒",
      title: "Secure Transactions",
      description: "Enterprise-grade security with escrow protection for all transactions",
      category: "Security"
    },
    {
      icon: "🌍",
      title: "Global Network",
      description: "Access to talent and services from around the world, 24/7",
      category: "Global"
    },
    {
      icon: "⚡",
      title: "Instant Deployment",
      description: "Get started in minutes with our streamlined onboarding process",
      category: "Speed"
    }
  ];

  return (
    <section className="py-16 bg-zion-slate-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Zion Tech?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
            Experience the future of tech services with our cutting-edge platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-zion-slate border-zion-blue-light text-white hover:border-zion-purple transition-colors">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{feature.icon}</div>
                <Badge variant="outline" className="mx-auto border-zion-cyan text-zion-cyan">
                  {feature.category}
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-xl mb-2 text-white">{feature.title}</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}