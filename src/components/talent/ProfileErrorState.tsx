import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, Home } from '@/components/icons';
import { Link } from 'react-router-dom';

interface ProfileErrorStateProps {
  error: string;
  onRetry?: () => void;
}

export function ProfileErrorState({ error, onRetry }: ProfileErrorStateProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <CardTitle className="text-xl text-red-600 dark:text-red-400">
            Profile Not Found
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-zion-slate-600 dark:text-zion-slate-300">
            {error || "We couldn't load the profile you're looking for. It might have been removed or the link might be incorrect."}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            {onRetry && (
              <Button 
                onClick={onRetry}
                variant="outline"
                className="flex-1"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
            )}
            
            <Button asChild className="flex-1">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
          </div>
          
          <div className="pt-4 border-t border-zion-slate-200 dark:border-zion-slate-700">
            <p className="text-sm text-zion-slate-500 dark:text-zion-slate-400">
              Need help? Contact our support team
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/talent">Browse Talent</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}