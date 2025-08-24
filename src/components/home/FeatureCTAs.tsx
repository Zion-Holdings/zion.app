
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function FeatureCTAs() {
  const features = [
    {
      title: "AI Talent Marketplace",
      description: "Connect with verified AI professionals and experts from around the world",
      badge: "Popular",
      cta: "Find Talent",
      link: "/talent",
      icon: "🧠"
    },
    {
      title: "Tech Services Hub",
      description: "Browse and book professional tech services with instant quotes",
      badge: "New",
      cta: "Browse Services",
      link: "/services",
      icon: "🔧"
    },
    {
      title: "Equipment Solutions",
      description: "Find the latest hardware and equipment for your tech needs",
      badge: "Featured",
      cta: "Shop Now",
      link: "/equipment",
      icon: "💻"
    }
  ];

  return (
    <section className="py-16 bg-zion-slate-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Our Platform
          </h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
            Discover the full range of features that make Zion Tech the ultimate tech marketplace
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-zion-slate border-zion-blue-light text-white hover:border-zion-purple transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="text-4xl">{feature.icon}</div>
                  <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-zion-slate-dark">
                  {feature.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
