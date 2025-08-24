import React from 'react';
import { Button } from '@/components/ui/Button';
import { AlertTriangle } from 'lucide-react';

interface ProfileErrorStateProps {
  error: string;
  onRetry?: () => void;
}

export const ProfileErrorState: React.FC<ProfileErrorStateProps> = ({ error, onRetry }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
          <AlertTriangle className="w-8 h-8 text-red-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Profile Not Found</h2>
        <p className="text-gray-600 mb-6">{error}</p>
        {onRetry && (
          <Button onClick={onRetry} className="bg-zion-blue hover:bg-zion-blue-dark text-white">
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
};