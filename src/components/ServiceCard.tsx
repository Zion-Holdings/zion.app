import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    price: string;
    category: string;
    rating: number;
    image?: string;
    features?: string[];
  };
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-foreground">
              {service.title}
            </CardTitle>
            <CardDescription className="mt-2 text-sm text-muted-foreground">
              {service.description}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="ml-2">
            {service.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {service.features && (
            <div className="space-y-2">
              {service.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-muted-foreground">
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                  {feature}
                </div>
              ))}
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              {service.price}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <span className="mr-1">★</span>
              {service.rating}
            </div>
          </div>
          
          <Button asChild className="w-full">
            <Link to={`/services/${service.id}`}>
              View Details
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}