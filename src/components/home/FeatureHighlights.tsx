import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Feature {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  benefits: string[];
}

const features: Feature[] = [
  {
    id: '1',
    title: 'AI-Powered Solutions',
    description: 'Cutting-edge artificial intelligence services that adapt and learn from your business needs.',
    category: 'AI Services',
    icon: '🤖',
    benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
  },
  {
    id: '2',
    title: 'Comprehensive IT Services',
    description: 'End-to-end IT solutions from infrastructure to cloud migration and cybersecurity.',
    category: 'IT Services',
    icon: '💻',
    benefits: ['Cloud Migration', 'Cybersecurity', 'Network Infrastructure', 'DevOps'],
  },
  {
    id: '3',
    title: 'Micro SAAS Platforms',
    description: 'Scalable software-as-a-service solutions designed for modern business challenges.',
    category: 'Micro SAAS',
    icon: '🚀',
    benefits: ['Workflow Automation', 'Data Analytics', 'Customer Management', 'Performance Monitoring'],
  },
];

export function FeatureHighlights() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine innovation, expertise, and cutting-edge technology to deliver solutions that drive real business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="mt-2">
                  {feature.description}
                </CardDescription>
                <Badge variant="outline" className="mt-2">
                  {feature.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-background rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our innovative solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Get Started
              </button>
              <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}