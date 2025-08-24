import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Users, Briefcase, Building } from 'lucide-react';

interface UserTypeSelectionProps {
  onSelect: (type: 'serviceProvider' | 'talent' | 'client') => void;
}

export const UserTypeSelection: React.FC<UserTypeSelectionProps> = ({ onSelect }) => {
  const userTypes = [
    {
      type: 'serviceProvider' as const,
      title: 'Service Provider',
      description: 'I offer technology services and solutions',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      type: 'talent' as const,
      title: 'Talent',
      description: 'I\'m looking for job opportunities',
      icon: <Users className="w-8 h-8" />,
      color: 'from-green-500 to-green-600'
    },
    {
      type: 'client' as const,
      title: 'Client',
      description: 'I need technology services',
      icon: <Building className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
        <p className="text-lg text-gray-600">Select how you'd like to use Zion Tech Group</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {userTypes.map((userType) => (
          <Card key={userType.type} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${userType.color} rounded-full mb-4`}>
                <div className="text-white">
                  {userType.icon}
                </div>
              </div>
              <CardTitle className="text-xl">{userType.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">{userType.description}</p>
              <Button 
                onClick={() => onSelect(userType.type)}
                className="w-full bg-gradient-to-r from-zion-blue to-zion-blue-dark hover:from-zion-blue-dark hover:to-zion-blue text-white"
              >
                Continue as {userType.title}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};