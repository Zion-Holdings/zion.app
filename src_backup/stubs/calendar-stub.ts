// Emergency stub for react-day-picker during build issues

export interface CalendarProps {
  className?: string;
  classNames?: Record<string, string>;
  showOutsideDays?: boolean;
  selected?: Date | Date[] | undefined;
  onSelect?: (date: Date | undefined) => void;
  mode?: string;
  [key: string]: any;
}

export interface DateRange {
  from?: Date;
  to?: Date;
}

// Stub DayPicker component - simple function that returns null during build
export const DayPicker = (props: CalendarProps) => {
  // Return null for build compatibility
  return null;
};

// Export as default
export default DayPicker;

// Additional exports that might be needed
export const format = (date: Date, formatStr: string) => {
  return date.toLocaleDateString();
};

export const isValid = (date: any): date is Date => {
  return date instanceof Date && !isNaN(date.getTime());
};