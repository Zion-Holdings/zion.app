
import React from 'react';
import { format } from 'date-fns';

interface DateDividerProps {
  date: Date;
}

export function DateDivider({ date }: DateDividerProps) {
  return (
    <div className="flex items-center my-4">
      <div className="flex-1 border-t border-zion-purple/20"></div>
      <div className="px-3 text-xs text-zion-slate">
        {format(date, 'MMM d, yyyy')}
      </div>
      <div className="flex-1 border-t border-zion-purple/20"></div>
    </div>
  );
}
