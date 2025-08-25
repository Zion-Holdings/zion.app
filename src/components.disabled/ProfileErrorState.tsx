import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ProfileErrorStateProps {
  error?: string;
  onRetry?: () => void;
}

export const ProfileErrorState: React.FC<ProfileErrorStateProps> = ({ 
  error = 'Failed to load profile', 
  onRetry 
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Card>
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600">
            {error}
          </p>
        </CardHeader>
        <CardContent className="text-center">
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              We're having trouble loading this profile. Please try again or contact support if the problem persists.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {onRetry && (
                <Button onClick={onRetry} className="flex items-center space-x-2">
                  <RefreshCw className="w-4 h-4" />
                  <span>Try Again</span>
                </Button>
              )}
              
              <Button variant="outline" onClick={() => window.location.href = '/'}>
                Go Home
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};