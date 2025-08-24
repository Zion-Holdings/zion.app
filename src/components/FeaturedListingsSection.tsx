import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface FeaturedListing {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  reviewCount: number;
  image: string;
  tags: string[];
}

const FEATURED_LISTINGS: FeaturedListing[] = [
  {
    id: '1',
    title: 'AI-Powered CRM System',
    description: 'Intelligent customer relationship management with predictive analytics and automated lead scoring.',
    price: 299,
    category: 'AI Business Solutions',
    rating: 4.9,
    reviewCount: 127,
    image: '/images/crm-system.jpg',
    tags: ['CRM', 'AI', 'Analytics'],
  },
  {
    id: '2',
    title: 'Cloud Infrastructure Setup',
    description: 'Complete cloud infrastructure setup with monitoring, security, and scalability best practices.',
    price: 499,
    category: 'Cloud Services',
    rating: 4.8,
    reviewCount: 89,
    image: '/images/cloud-infra.jpg',
    tags: ['AWS', 'Azure', 'DevOps'],
  },
  {
    id: '3',
    title: 'E-commerce Platform',
    description: 'Modern e-commerce platform with payment integration, inventory management, and analytics.',
    price: 799,
    category: 'Web Development',
    rating: 4.7,
    reviewCount: 156,
    image: '/images/ecommerce.jpg',
    tags: ['React', 'Node.js', 'Stripe'],
  },
];

export const FeaturedListingsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and highly-rated technology solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_LISTINGS.map((listing) => (
            <Card key={listing.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{listing.category}</Badge>
                  <span className="text-2xl font-bold text-blue-600">
                    ${listing.price}
                  </span>
                </div>
                <CardTitle className="text-lg">{listing.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{listing.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-gray-600">
                      {listing.rating} ({listing.reviewCount} reviews)
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {listing.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Link
                  to={`/services/${listing.id}`}
                  className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};