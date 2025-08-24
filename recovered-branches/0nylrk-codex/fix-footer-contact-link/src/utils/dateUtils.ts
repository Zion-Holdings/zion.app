
import { format } from "date-fns";

/**
 * Formats a date string into a readable format
 * @param dateString ISO date string to format
 * @returns Formatted date string
 */
export const formatDate = (dateString: string): string => {
  try {
    return format(new Date(dateString), 'PP');
  } catch (e) {
    return dateString;
  }
};
