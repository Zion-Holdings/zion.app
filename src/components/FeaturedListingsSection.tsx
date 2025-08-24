import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface FeaturedListing {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  featured: boolean;
  image?: string;
}

const featuredListings: FeaturedListing[] = [
  {
    id: '1',
    title: 'AI-Powered Content Generation Suite',
    description: 'Advanced AI tools for creating high-quality content across multiple formats.',
    category: 'AI Services',
    price: '$299/month',
    featured: true,
  },
  {
    id: '2',
    title: 'Cybersecurity Monitoring Platform',
    description: 'Real-time threat detection and security monitoring for businesses.',
    category: 'IT Services',
    price: '$199/month',
    featured: true,
  },
  {
    id: '3',
    title: 'Cloud Cost Optimization Tool',
    description: 'Intelligent cloud resource management and cost optimization.',
    category: 'Micro SAAS',
    price: '$99/month',
    featured: true,
  },
];

export function FeaturedListingsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Featured Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and innovative solutions that are transforming businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredListings.map((listing) => (
            <Card key={listing.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{listing.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {listing.description}
                    </CardDescription>
                  </div>
                  {listing.featured && (
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">{listing.category}</Badge>
                  <span className="text-lg font-semibold text-primary">
                    {listing.price}
                  </span>
                </div>
                <Link
                  to={`/services/${listing.id}`}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Learn More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}