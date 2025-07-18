<<<<<<< HEAD
import { format }  from 'date-fns;;
/**;';
 * Formats a date for PDF display'
 * @param date Date or string to format;
 * @returns Formatted date string;
 */'
export function formatDate(): unknown {): unknown {): unknown {): unknown {): unknown {date: Date | string | undefined): string {;
  if (!date) return 
  if (typeof date === 'string') {;
    return format(new Date(date), 'MMM yyyy')'
  };
  return format(date, 'MMM yyyy');
};
}'
=======
import { format } from 'date-fns;'
;
/**;
 * Formats a date for PDF display;''
 * @param date Date or string to format;
 * @returns Formatted date string;
 */;'';
export function formatDate(): unknown {): unknown {): unknown {): unknown {): unknown {date: Date | string | undefined): string {;;
  if (!date) return 
  if (typeof date === 'string') {;;'
    return format(new Date(date), 'MMM yyyy');''
  };;
  return format(date, 'MMM yyyy');'
};
;
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''