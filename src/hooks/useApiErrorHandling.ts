import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import * as Sentry from '@sentry/nextjs';
import { toast } from '@/hooks/use-toast';
import {logErrorToProduction} from '@/utils/productionLogger';


interface ApiErrorHandlingOptions {
  showToast?: boolean;
  logToSentry?: boolean;
  customMessage?: string;
}

export const useApiErrorHandling = () => {
  const queryClient = useQueryClient();

  const handleApiError = useCallback(
    (error: Error, options: ApiErrorHandlingOptions = {}) => {
      const {
        showToast = true,
        logToSentry = true,
        customMessage,
      } = options;

      // Determine error message
      let errorMessage = customMessage || 'An unexpected error occurred';
      
      if (error.message?.includes('fetch')) {
        errorMessage = 'Network error – please retry';
      } else if (error.message?.includes('timeout')) {
        errorMessage = 'Request timed out - please try again';
      } else if (error.message?.includes('401')) {
        errorMessage = 'Authentication required - please log in';
      } else if (error.message?.includes('403')) {
        errorMessage = 'Access denied - insufficient permissions';
      } else if (error.message?.includes('404')) {
        errorMessage = 'Requested resource not found';
      } else if (error.message?.includes('500')) {
        errorMessage = 'Server error - please try again later';
      }

      // Log to Sentry
      if (logToSentry) {
        Sentry.withScope((scope) => {
          scope.setTag('source', 'useApiErrorHandling');
          scope.setLevel('error');
          scope.setContext('errorDetails', {
            message: error.message,
            stack: error.stack,
            name: error.name,
          });
          Sentry.captureException(error);
        });
      }

      // Show toast notification
      if (showToast) {
        toast({
          title: 'Error',
          description: errorMessage,
          variant: 'destructive',
        });
      }

      logErrorToProduction('API Error:', { data: error });
    },
    []
  );

  const retryAllQueries = useCallback(async () => {
    try {
      await queryClient.invalidateQueries();
      await queryClient.refetchQueries();
      toast({
        title: 'Refreshed',
        description: 'Data has been refreshed successfully',
      });
    } catch (error) {
      logErrorToProduction('Failed to retry queries:', { data: error });
      toast({
        title: 'Retry Failed',
        description: 'Failed to refresh data - please try again',
        variant: 'destructive',
      });
    }
  }, [queryClient]);

  const retryQuery = useCallback(
    async (queryKey: string[]) => {
      try {
        await queryClient.invalidateQueries({ queryKey });
        await queryClient.refetchQueries({ queryKey });
        toast({
          title: 'Refreshed',
          description: 'Data has been refreshed successfully',
        });
      } catch (error) {
        logErrorToProduction('Failed to retry query:', { data: error });
        toast({
          title: 'Retry Failed',
          description: 'Failed to refresh data - please try again',
          variant: 'destructive',
        });
      }
    },
    [queryClient]
  );

  const isNetworkError = useCallback((error: Error) => {
    return error.message?.includes('fetch') ||
           error.message?.includes('network') ||
           error.message?.includes('timeout') ||
           !navigator.onLine;
  }, []);

  const isOffline = typeof navigator !== 'undefined' ? !navigator.onLine : false;

  return {
    handleApiError,
    retryAllQueries,
    retryQuery,
    isNetworkError,
    isOffline,
  };
}; 