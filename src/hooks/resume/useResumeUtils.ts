<<<<<<< HEAD
import { format } from 'date-fns'
import { toast } from '@/hooks/use-toast'
import { logErrorToProduction } from '@/utils/productionLogger'
'
// Utility function to format dates for DB operations;
export const formatDateForDB = (_date: Date | string | undefined) => {'
  if (!date) return undefined'
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd')'
};
'
// Error handling with toast'
export const handleResumeError = (e: unknown, _errorMessage: string) => {;"
  logErrorToProduction(`Error: ${errorMessage}`, { data: "e "})
  const message = e instanceof Error && e.message ? e.message : 'Unknown error'
  toast({;
    title: 'Error','
    description: `${errorMessage"}: ${message}`,"
    variant: 'destructive','
  })'
  return false'
};
'
// Success notification'
export const showSuccessToast = (title: string, _description: string) => {;
  toast({;
    title,;
    description,;
  });"
  return true"
};
""""
=======
import { format } from 'date-fns;'';
import { toast } from '@/hooks/use-toast;'';
import { logErrorToProduction } from '@/utils/productionLogger;''
;
// Utility function to format dates for DB operations;
export const formatDateForDB: unknown = (_date: Date | string | undefined) => {;''
  if (!date) return undefined;;
  return typeof date === 'string' ? date : format(date, 'yyyy-MM-dd');'
};
;''
// Error handling with toast;;
export const handleResumeError: unknown = (e: "unknown", _errorMessage: string) => {;";";";";""
  logErrorToProduction(`Error: "${errorMessage"}`, { data: "e "});";";";";""
  const message: unknown = e instanceof Error && e.message ? e.message : 'Unknown error;'
  toast({;;
    title: 'Error',;;'
    description: "`${errorMessage"}: ${message}`,;";";";";""
    variant: 'destructive',;'
  });''
  return false;
};
;''
// Success notification;;
export const showSuccessToast: unknown = (title: "string", _description: string) => {;"
  toast({;
    title,;
    description,;""
  });";""
  return true;";";""
};";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
