import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
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
          <button
            key={type.id}
            onClick={() => onSelectType(type.id)}
            className="w-full text-left"
          >
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-500">
              <CardContent className="p-0">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    {type.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold mb-2">{type.title}</CardTitle>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </button>
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