
import { format } from 'date-fns';
import { toast } from '@/hooks/use-toast';
import {logErrorToProduction} from '@/utils/productionLogger';

// Utility function to format dates for DB operations
export const formatDateForDB = (date: Date | string | undefined) => {

  if (!date) return undefined;
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd');
};

// Error handling with toast
export const handleResumeError = (e: any, errorMessage: string) => {
  logErrorToProduction('Error: ${errorMessage}', { data:  e });
  toast({
    title: "Error",
    description: `${errorMessage}: ${e.message}`,
    variant: "destructive"
  });
  return false;
};

// Success notification
export const showSuccessToast = (title: string, description: string) => {
  toast({
    title,
    description
  });
  return true;
};
