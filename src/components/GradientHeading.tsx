<<<<<<< HEAD
import { cn } from '@/lib/utils;'';
import React from 'react''';

interface GradientHeadingProps {;
  children: React.ReactNode;''
  className?: string;''
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6''
};''
'';
export function GradientHeading(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  children,;''
  className,;''
  level = 'h2',''
}: GradientHeadingProps) {;
  const Tag: unknown = level;''
''
  return (;
    <Tag;''
      className={cn(;''
        'text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent',;''
        'font-heading leading-tight',;''
        'text-transparent supports-[not(background-clip:text)]:text-foreground',''
        className,;
      )};''
      style={{;''
        minHeight: '1.2em',;''
        contain: 'layout style',;''
        willChange: 'auto',''
      }};
    >;
      {children};''
    </Tag>''
  );
};

};''
}
}''
}''
=======
import { cn } from '@/lib/utils'
import React from 'react'

interface GradientHeadingProps {;
  children: React.ReactNode'
  className?: string'
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}'
'
export function GradientHeading(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  children,'
  className,'
  level = 'h2','
}: GradientHeadingProps) {;
  const Tag = level'
'
  return (;
    <Tag'
      className={cn('
        'text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent','
        'font-heading leading-tight','
        'text-transparent supports-[not(background-clip:text)]:text-foreground','
        className,;
      )}'
      style={{'
        minHeight: '1.2em','
        contain: 'layout style','
        willChange: 'auto','
      }};
    >;
      {children}'
    </Tag>'
  );
};

}'

}'
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
