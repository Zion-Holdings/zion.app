<<<<<<< HEAD
import { useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react''
import { toast } from '@/hooks/use-toast'
import  { logErrorToProduction }  from '@/utils/productionLogger;
// Remove static import;''
// import  * as Sentry  from '@sentry/nextjs'
interface ApiErrorHandlingOptions {
  showToast?: boolean
  logToSentry?: boolean
  customMessage?: string''
}''
'
export const _useApiErrorHandling = () => {'
  const queryClient = useQueryClient();
'
  const handleApiError = useCallback('
    (error: Error, _options: "ApiErrorHandlingOptions = {}) => {
      const { showToast = true, logToSentry = true, customMessage } = options;"
"
      // Determine error message;
      let errorMessage = customMessage || 'An unexpected error occurred'
      if (error.message?.includes('fetch')) {'
        errorMessage = 'Network error – please retry'
      } else if (error.message?.includes('timeout')) {'
        errorMessage = 'Request timed out - please try again'
      } else if (error.message?.includes('401')) {'
        errorMessage = 'Authentication required - please log in'
      } else if (error.message?.includes('403')) {'
        errorMessage = 'Access denied - insufficient permissions'
      } else if (error.message?.includes('404')) {'
        errorMessage = 'Requested resource not found'
      } else if (error.message?.includes('500')) {'
        errorMessage = 'Server error - please try again later'
=======
import { useQueryClient } from '@tanstack/react-query;'';
import { useCallback } from 'react';';
import { toast } from '@/hooks/use-toast;'';
import { logErrorToProduction } from '@/utils/productionLogger;'
// Remove static import;;
// import * as Sentry from '@sentry/nextjs;'
;
interface ApiErrorHandlingOptions {;
  showToast?: boolean;
  logToSentry?: boolean;
  customMessage?: string;
};
;'';
export const _useApiErrorHandling: unknown = () => {;
  const queryClient: unknown = useQueryClient();
;''
  const handleApiError: unknown = useCallback(;;
    (error: "Error", _options: "ApiErrorHandlingOptions = {"}) => {;";""
      const { showToast = true, logToSentry = true, customMessage } = options;";";""
;";";";""
      // Determine error message;";";";";""
      let errorMessage = customMessage || 'An unexpected error occurred;'
;;
      if (error.message?.includes('fetch')) {;;'
        errorMessage = 'Network error  please retry;''
      } else if (error.message?.includes('timeout')) {;;'
        errorMessage = 'Request timed out - please try again;''
      } else if (error.message?.includes('401')) {;;'
        errorMessage = 'Authentication required - please log in;''
      } else if (error.message?.includes('403')) {;;'
        errorMessage = 'Access denied - insufficient permissions;''
      } else if (error.message?.includes('404')) {;;'
        errorMessage = 'Requested resource not found;''
      } else if (error.message?.includes('500')) {;;'
        errorMessage = 'Server error - please try again later;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      };
      // Log to Sentry;
      if (logToSentry) {;
        // Remove all imports and dynamic imports of @sentry/nextjs from this file.;
<<<<<<< HEAD
      }'
'
      // Show toast notification;
      if (showToast) {'
        toast({'
          title: 'Error','
          description: errorMessage"
          variant: 'destructive','
        });
      }'
'
      logErrorToProduction('API Error:', { data: "error })
    },;
    [],;
  );
  const retryAllQueries = useCallback(async () => {"
    try {;"
      await queryClient.invalidateQueries();
      await queryClient.refetchQueries()"
      toast({;"
        title: 'Refreshed','
        description: 'Data has been refreshed successfully','
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {})'
    } catch {'
      logErrorToProduction('Failed to retry queries:', { data: error })"
      toast({;"
        title: 'Retry Failed','
        description: 'Failed to refresh data - please try again','
        variant: 'destructive','
      });
    };
  }, [queryClient]);
  const retryQuery = useCallback(;
    async (_queryKey: string[]) => {'
      try {'
        await queryClient.invalidateQueries({ queryKey } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});
        await queryClient.refetchQueries({ queryKey })'
        toast({'
          title: 'Refreshed','
          description: 'Data has been refreshed successfully','
        })'
      } catch {'
        logErrorToProduction('Failed to retry query:', { data: error })"
        toast({;"
          title: 'Retry Failed','
          description: 'Failed to refresh data - please try again','
          variant: 'destructive','
        });
      };
    },;
    [queryClient],'
  )'
  const isNetworkError = useCallback((_error: Error) => {'
    return ('
      error.message?.includes('fetch') ||'
      error.message?.includes('network') ||'
      error.message?.includes('timeout') ||'
      !navigator.onLine'
    )'
  }, []);
'
  const isOffline: unknown ='
    typeof navigator !== 'undefined' ? !navigator.onLine : false'
=======
      };''
;
      // Show toast notification;
      if (showToast) {;''
        toast({;;
          title: 'Error',;;'
          description: "errorMessage",;";";";";""
          variant: 'destructive',;'
        });
      };''
;;
      logErrorToProduction('API Error:', { data: "error "});"
    },;
    [],;
  );
;
  const retryAllQueries: unknown = useCallback(async () => {;""
    try {;";""
      await queryClient.invalidateQueries();";";""
      await queryClient.refetchQueries();";";";""
      toast({;";";";";""
        title: 'Refreshed',;;'
        description: 'Data has been refreshed successfully',;'
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});''
    } catch {;;
      logErrorToProduction('Failed to retry queries:', { data: "error "});";";";""
      toast({;";";";";""
        title: 'Retry Failed',;;'
        description: 'Failed to refresh data - please try again',;;'
        variant: 'destructive',;'
      });
    };
  }, [queryClient]);
;
  const retryQuery: unknown = useCallback(;
    async (_queryKey: string[]) => {;''
      try {;
        await queryClient.invalidateQueries({ queryKey } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});
        await queryClient.refetchQueries({ queryKey });''
        toast({;;
          title: 'Refreshed',;;'
          description: 'Data has been refreshed successfully',;'
        });''
      } catch {;;
        logErrorToProduction('Failed to retry query:', { data: "error "});";";";""
        toast({;";";";";""
          title: 'Retry Failed',;;'
          description: 'Failed to refresh data - please try again',;;'
          variant: 'destructive',;'
        });
      };
    },;
    [queryClient],;''
  );
;
  const isNetworkError: unknown = useCallback((_error: Error) => {;''
    return (;;
      error.message?.includes('fetch') ||;;'
      error.message?.includes('network') ||;;'
      error.message?.includes('timeout') ||;'
      !navigator.onLine;''
    );
  }, []);
;''
  const isOffline: unknown =;;
    typeof navigator !== 'undefined' ? !navigator.onLine : false;'
;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  return {;
    handleApiError,;
    retryAllQueries,;
    retryQuery,;
<<<<<<< HEAD
    isNetworkError,'
    isOffline,'
  };
}'
'''''
=======
    isNetworkError,;''
    isOffline,;
  };
};''
''''''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
