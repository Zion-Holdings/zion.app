import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  Lock,
  BarChart3,
  Cpu
} from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  benefits: string[];
}

const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'AI-Powered Analytics',
    description: 'Advanced analytics powered by machine learning algorithms for deeper business insights.',
    icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
    category: 'Intelligence',
    benefits: ['Predictive insights', 'Real-time monitoring', 'Automated reporting'],
  },
  {
    id: '2',
    title: 'Enterprise Security',
    description: 'Bank-grade security with multi-factor authentication and end-to-end encryption.',
    icon: <Shield className="w-8 h-8 text-green-600" />,
    category: 'Security',
    benefits: ['SOC 2 compliance', 'GDPR ready', '24/7 monitoring'],
  },
  {
    id: '3',
    title: 'Scalable Infrastructure',
    description: 'Cloud-native architecture that scales automatically with your business growth.',
    icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
    category: 'Performance',
    benefits: ['Auto-scaling', '99.9% uptime', 'Global CDN'],
  },
  {
    id: '4',
    title: 'Team Collaboration',
    description: 'Built-in tools for seamless team collaboration and project management.',
    icon: <Users className="w-8 h-8 text-orange-600" />,
    category: 'Collaboration',
    benefits: ['Real-time editing', 'Role-based access', 'Activity tracking'],
  },
  {
    id: '5',
    title: 'Global Deployment',
    description: 'Deploy your applications worldwide with our global infrastructure network.',
    icon: <Globe className="w-8 h-8 text-red-600" />,
    category: 'Global',
    benefits: ['Multi-region', 'Edge computing', 'Local compliance'],
  },
  {
    id: '6',
    title: 'Advanced AI Processing',
    description: 'State-of-the-art AI models for natural language processing and computer vision.',
    icon: <Cpu className="w-8 h-8 text-indigo-600" />,
    category: 'AI',
    benefits: ['NLP capabilities', 'Computer vision', 'Custom training'],
  },
];

export const FeaturesGuideSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive suite of features designed to accelerate your business growth and digital transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <Card key={feature.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center">
                  {feature.icon}
                </div>
                <Badge variant="outline" className="mb-2">
                  {feature.category}
                </Badge>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-center">
                  {feature.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  {feature.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our platform to accelerate their digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Start Free Trial
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};