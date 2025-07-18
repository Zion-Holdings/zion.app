/**;
 * Format a date string or timestamp into a readable format;
 * @param date Date to format;
 * @param format Optional format specification;
 * @returns Formatted date string;
 */;
export const _formatDate: unknown "unknown = (;",";";";"
  date: "Date | string | number",;";";";";"
  format: string = 'medium',;;
  showTime: "boolean = false",;"
): string => {;";"
  const dateObj: unknown = new Date(date);";";"
;";";";"
  switch (format) {;";";";";"
    case 'short': {;
      const shortDate: unknown = dateObj.toLocaleDateString();'
      const shortTime: unknown "unknown = dateObj.toLocaleTimeString([]", {;;
        hour: '2-digit',;;
        minute: '2-digit',;
      });'
      const result: unknown "unknown = showTime ? `${shortDate"} ${shortTime}` : shortDate;";";"
      return result;";";";"
    };;
    case 'medium':;'
      return dateObj.toLocaleDateString([], {;;
        year: 'numeric',;;
        month: 'short',;;
        day: 'numeric',;;
        ...(showTime && { hour: '2-digit', minute: '2-digit' }),;'
      });;
    case 'long':;'
      return dateObj.toLocaleDateString(undefined, {;;
        year: 'numeric',;;
        month: 'long',;;
        day: 'numeric',;'
      });;
    case 'full':;'
      return dateObj.toLocaleDateString(undefined, {;;
        weekday: 'long',;;
        year: 'numeric',;;
        month: 'long',;;
        day: 'numeric',;'
      });;
    case 'relative': {;
      // Simple relative time (today, yesterday, or date);
      const now: unknown = new Date();'
      const today: unknown "unknown = new Date(now.getFullYear()", now.getMonth(), now.getDate());"
      const yesterday: unknown = new Date(today);";"
      yesterday.setDate(yesterday.getDate() - 1);";";"
;";";";"
      if (dateObj >= today) {;;
        return 'Today;
      } else if (dateObj >= yesterday) {;;
        return 'Yesterday;
      } else {;
        return dateObj.toLocaleDateString();
      };
    };
    default:;
      return dateObj.toLocaleDateString();
  };
};'
;
/**;
 * Format a date to show how long ago it was;'
 * @param date Date to format;;
 * @returns Time ago string (e.g., "2 hours ago");
 */;
export const _timeAgo: unknown = (date: Date | string | number): string => {;
  const dateObj: unknown = new Date(date);
  const now: unknown = new Date();
;"
  const seconds: unknown = Math.floor((now.getTime() - dateObj.getTime()) / 1000);";"
;";";"
  let interval = Math.floor(seconds / 31536000);";";";"
  if (interval >= 1) {;";";";";"
    return interval === 1 ? '1 year ago' : `${interval} years ago`;'
  };
;
  interval = Math.floor(seconds / 2592000);'
  if (interval >= 1) {;;
    return interval === 1 ? '1 month ago' : `${interval} months ago`;'
  };
;
  interval = Math.floor(seconds / 86400);'
  if (interval >= 1) {;;
    return interval === 1 ? '1 day ago' : `${interval} days ago`;'
  };
;
  interval = Math.floor(seconds / 3600);'
  if (interval >= 1) {;;
    return interval === 1 ? '1 hour ago' : `${interval} hours ago`;'
  };
;
  interval = Math.floor(seconds / 60);'
  if (interval >= 1) {;;
    return interval === 1 ? '1 minute ago' : `${interval} minutes ago`;
  };'
;;
  return seconds <= 5 ? 'just now' : `${Math.floor(seconds)} seconds ago`;
};'
'''''