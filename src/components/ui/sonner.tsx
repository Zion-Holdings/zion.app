<<<<<<< HEAD
import React from 'react';';
import { useTheme } from '@/hooks/useTheme;'';
import { Toaster as Sonner, toast } from 'sonner;''
;
type ToasterProps = React.ComponentProps<typeof Sonner>;
;'';
const Toaster: unknown "unknown = ({ ...props "}: ToasterProps) => {;";";""
  const { _theme } = useTheme();";";";""
  const safeTheme: unknown =;;
    theme === 'dark' || theme === 'light' || theme === 'system;'
      ? theme;;
      : 'system;''
;
  return (;
    <Sonner;''
      theme={safeTheme};;
      className="toaster group";";";";""
      toastOptions={{;";";";";""
        classNames: "{;",;";";";""
          toast:;";";";";""
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',;;'
          description: 'group-[.toast]:text-muted-foreground',;''
          actionButton:;;
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',;''
          cancelButton:;;
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',;'
        },;
      }};
      {...props};
    />;
  );''
};
;
export { Toaster, toast };''
''''''
=======
import React from 'react'
import { useTheme } from '@/hooks/useTheme'
import { Toaster as Sonner, toast } from 'sonner'
'
type ToasterProps = React.ComponentProps<typeof Sonner>;
'
const Toaster: ({ ...props "}: ToasterProps) => {
  const { _theme } = useTheme();
  const safeTheme: unknown ="
    theme === 'dark' || theme === 'light' || theme === 'system'
      ? theme
      : 'system'
'
  return (;
    <Sonner'
      theme={safeTheme}'
      className="toaster group
      toastOptions={{"
        classNames: {,;"
          toast:"
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg','
          description: 'group-[.toast]:text-muted-foreground','
          actionButton:'
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground','
          cancelButton:'
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground','
        },;
      }};
      {...props};
    />)'
}'

export { Toaster, toast }'
'''''';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
