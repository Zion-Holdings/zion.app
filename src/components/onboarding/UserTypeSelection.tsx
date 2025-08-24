import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  User, 
  Briefcase, 
  Users,
  CheckCircle
} from 'lucide-react';

interface UserType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  recommended?: boolean;
}

const USER_TYPES: UserType[] = [
  {
    id: 'business',
    title: 'Business Owner',
    description: 'I own or manage a business and need technology solutions',
    icon: <Building2 className="w-8 h-8" />,
    features: [
      'AI-powered business solutions',
      'Custom software development',
      'Cloud infrastructure setup',
      'Digital transformation consulting',
      '24/7 technical support'
    ],
    recommended: true,
  },
  {
    id: 'freelancer',
    title: 'Freelancer',
    description: 'I work independently and need tools to grow my business',
    icon: <User className="w-8 h-8" />,
    features: [
      'Portfolio websites',
      'Client management tools',
      'Invoicing and payment systems',
      'Marketing automation',
      'Business analytics'
    ],
  },
  {
    id: 'agency',
    title: 'Agency',
    description: 'I run an agency and need scalable solutions for clients',
    icon: <Users className="w-8 h-8" />,
    features: [
      'Multi-client management',
      'White-label solutions',
      'Team collaboration tools',
      'Client reporting dashboards',
      'Scalable infrastructure'
    ],
  },
  {
    id: 'developer',
    title: 'Developer',
    description: 'I\'m a developer looking for tools and resources',
    icon: <Briefcase className="w-8 h-8" />,
    features: [
      'Development tools and APIs',
      'Code templates and libraries',
      'Deployment automation',
      'Performance monitoring',
      'Developer community access'
    ],
  },
];

interface UserTypeSelectionProps {
  selectedType: string;
  onSelectType: (type: string) => void;
  onContinue: () => void;
}

export const UserTypeSelection: React.FC<UserTypeSelectionProps> = ({
  selectedType,
  onSelectType,
  onContinue,
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Let's get to know you better so we can provide the most relevant solutions for your needs
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {USER_TYPES.map((type) => (
          <Card 
            key={type.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
              selectedType === type.id 
                ? 'ring-2 ring-blue-500 border-blue-500' 
                : 'hover:border-gray-300'
            }`}
            onClick={() => onSelectType(type.id)}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {type.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                    {type.recommended && (
                      <Badge className="ml-2 bg-green-100 text-green-800">
                        Recommended
                      </Badge>
                    )}
                  </div>
                </div>
                {selectedType === type.id && (
                  <CheckCircle className="w-6 h-6 text-blue-500" />
                )}
              </div>
              <p className="text-gray-600 text-sm">{type.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {type.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center">
        <Button
          onClick={onContinue}
          disabled={!selectedType}
          className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};