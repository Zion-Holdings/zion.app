import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function QuickAccess() {
  const quickActions = [
    {
      title: "Find AI Talent",
      description: "Connect with top AI professionals",
      icon: "🧠",
      link: "/talent",
      color: "from-zion-purple to-zion-purple-dark"
    },
    {
      title: "Browse Services",
      description: "Discover tech services",
      icon: "🔧",
      link: "/services",
      color: "from-zion-blue to-zion-blue-dark"
    },
    {
      title: "Get Equipment",
      description: "Find hardware solutions",
      icon: "💻",
      link: "/equipment",
      color: "from-zion-cyan to-zion-cyan-dark"
    },
    {
      title: "AI Matching",
      description: "Smart service matching",
      icon: "🎯",
      link: "/match",
      color: "from-zion-purple-dark to-zion-slate"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quick Access
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started quickly with our most popular features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className={`text-4xl mb-2 bg-gradient-to-r ${action.color} bg-clip-text text-transparent`}>
                  {action.icon}
                </div>
                <CardTitle className="text-xl">{action.title}</CardTitle>
                <CardDescription>{action.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-dark hover:to-zion-purple">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}