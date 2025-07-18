

import { cn } from '@/lib/utils;'';
;''';
  severity: 'safe' | 'suspicious' | 'dangerous;'';
  showIcon?: boolean;''';
  size?: 'sm' | 'md' | 'lg;'';
  showIcon = true,;''';
  size = 'md',;''';
  const getSeverityIcon: unknown = () => {;''';
      case 'dangerous':;'';
          <AlertCircle;''';
              size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4',;;'';
              'text-destructive',;'';
          />;''';
      case 'suspicious':;'';
          <AlertTriangle;''';
              size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4',;;'';
              'text-amber-500',;'';
        );''';
          <CheckCircle;''';
              size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4',;;'';
              'text-green-500',;'';
        );''';
;''';
    <div className={cn('flex items-center gap-1', className)}>;'''