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
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
}

const features: Feature[] = [
  {
    id: '1',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Get real-time insights into your business performance with intelligent data visualization.',
    category: 'AI Services',
    icon: '📊',
    benefits: ['Real-time monitoring', 'Predictive insights', 'Custom reports', 'Automated alerts'],
    complexity: 'Intermediate',
  },
  {
    id: '2',
    title: 'Cloud Migration Assistant',
    description: 'Streamline your cloud migration process with our intelligent planning and execution tools.',
    category: 'IT Services',
    icon: '☁️',
    benefits: ['Migration planning', 'Cost optimization', 'Security compliance', 'Performance monitoring'],
    complexity: 'Advanced',
  },
  {
    id: '3',
    title: 'Workflow Automation Engine',
    description: 'Automate repetitive tasks and streamline business processes for maximum efficiency.',
    category: 'Micro SAAS',
    icon: '⚡',
    benefits: ['Process automation', 'Integration capabilities', 'Custom workflows', 'Performance tracking'],
    complexity: 'Beginner',
  },
  {
    id: '4',
    title: 'Cybersecurity Threat Monitor',
    description: 'Stay protected with advanced threat detection and real-time security monitoring.',
    category: 'IT Services',
    icon: '🛡️',
    benefits: ['Threat detection', 'Incident response', 'Compliance reporting', 'Security training'],
    complexity: 'Advanced',
  },
  {
    id: '5',
    title: 'Customer Intelligence Platform',
    description: 'Understand your customers better with AI-driven insights and predictive analytics.',
    category: 'AI Services',
    icon: '🧠',
    benefits: ['Customer segmentation', 'Behavior analysis', 'Predictive modeling', 'Personalization'],
    complexity: 'Intermediate',
  },
  {
    id: '6',
    title: 'Resource Optimization Tool',
    description: 'Optimize your business resources and reduce costs with intelligent recommendations.',
    category: 'Micro SAAS',
    icon: '🎯',
    benefits: ['Cost analysis', 'Resource planning', 'Efficiency metrics', 'Optimization suggestions'],
    complexity: 'Beginner',
  },
];

export function FeaturesGuideSection() {
  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Explore Our Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful tools and capabilities that make Zion Tech Group the leading choice 
            for AI services, IT solutions, and micro SAAS platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <Badge 
                    variant="outline" 
                    className={`${getComplexityColor(feature.complexity)} border-current`}
                  >
                    {feature.complexity}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="mt-2">
                  {feature.description}
                </CardDescription>
                <Badge variant="secondary" className="mt-2">
                  {feature.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-4 border-t border-border">
                  <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                    Learn More
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-background rounded-lg p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Help Choosing the Right Features?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our experts can help you identify the perfect combination of features for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Schedule Consultation
              </button>
              <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors">
                View Feature Comparison
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}