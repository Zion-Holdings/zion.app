import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function FeaturedListingsSection() {
  const featuredServices = [
    {
      id: 1,
      title: "AI-Powered Data Analytics",
      description: "Advanced data analysis using cutting-edge AI algorithms",
      category: "AI Services",
      price: "$500",
      rating: 4.9,
      reviews: 127
    },
    {
      id: 2,
      title: "Cloud Infrastructure Setup",
      description: "Complete cloud migration and infrastructure optimization",
      category: "Cloud Services",
      price: "$800",
      rating: 4.8,
      reviews: 89
    },
    {
      id: 3,
      title: "Cybersecurity Assessment",
      description: "Comprehensive security audit and vulnerability assessment",
      category: "Security",
      price: "$600",
      rating: 4.9,
      reviews: 156
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover top-rated AI and tech services from verified professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant="secondary">{service.category}</Badge>
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">★</span>
                    <span className="font-medium">{service.rating}</span>
                    <span className="text-sm text-muted-foreground">({service.reviews} reviews)</span>
                  </div>
                </div>
                <Button className="w-full">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}