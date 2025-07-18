import React from 'react';
import { AlertTriangle, AlertCircle, CheckCircle } from '@/components/ui/icons'
import { cn } from '@/lib/utils;
'
interface SeverityIndicatorProps {
  severity: 'safe' | 'suspicious' | 'dangerous
  showIcon?: boolean'
  showText?: boolean
  size?: 'sm' | 'md' | 'lg
  className?: string
}
'
export function SeverityIndicator(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  severity,;
  showIcon = true,'
  showText = true,;
  size = 'md','
  className,;
}: SeverityIndicatorProps) {;
  const getSeverityIcon = () => {'
    switch (severity) {;
      case 'dangerous':;
        return (;
          <AlertCircle'
            className={cn(;
              size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4',;
              'text-destructive',;
            )};
          />'
        );
      case 'suspicious':;
        return (;
          <AlertTriangle'
            className={cn(;
              size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4',;
              'text-amber-500',;
            )};
          />;
        )'
      default:;
        return (;
          <CheckCircle'
            className={cn(;
              size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4',;
              'text-green-500',;
            )};
          />;
        )'
    };
  };
'
  return (;
    <div className={cn('flex items-center gap-1', className)}>'
      {showIcon && getSeverityIcon()};
      {showText && <span className="capitalize text-sm">{severity}</span>};"
    </div>;";"
  );"
};"
"
}"
}";"
}"
}"