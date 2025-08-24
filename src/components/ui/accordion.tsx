import React from 'react';
import { cn } from '@/lib/utils';

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  disabled?: boolean;
}

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const AccordionContext = React.createContext<{
  type: 'single' | 'multiple';
  collapsible: boolean;
  openItems: string[];
  setOpenItems: React.Dispatch<React.SetStateAction<string[]>>;
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
} | undefined>(undefined);

export const Accordion: React.FC<AccordionProps> = ({
  type = 'single',
  collapsible = false,
  defaultValue,
  value,
  onValueChange,
  className,
  children,
  ...props
}) => {
  const [openItems, setOpenItems] = React.useState<string[]>(
    defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []
  );

  const contextValue = React.useMemo(() => ({
    type,
    collapsible,
    openItems: value ? (Array.isArray(value) ? value : [value]) : openItems,
    setOpenItems,
    value,
    onValueChange
  }), [type, collapsible, openItems, value, onValueChange]);

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={cn('w-full', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem: React.FC<AccordionItemProps> = ({
  value,
  disabled = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn('border-b', className)}
      data-disabled={disabled}
      {...props}
    >
      {children}
    </div>
  );
};

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  className,
  ...props
}) => {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error('AccordionTrigger must be used within Accordion');

  const { type, collapsible, openItems, setOpenItems, onValueChange } = context;

  const handleClick = () => {
    if (props.disabled) return;

    const newOpenItems = type === 'single'
      ? openItems.includes(props.value || '') ? [] : [props.value || '']
      : openItems.includes(props.value || '')
        ? openItems.filter(item => item !== props.value)
        : [...openItems, props.value || ''];

    setOpenItems(newOpenItems);
    onValueChange?.(type === 'single' ? newOpenItems[0] || '' : newOpenItems);
  };

  return (
    <button
      type="button"
      className={cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
      <svg
        className="h-4 w-4 shrink-0 transition-transform duration-200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6,9 12,15 18,9" />
      </svg>
    </button>
  );
};

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className,
  ...props
}) => {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error('AccordionContent must be used within Accordion');

  const { openItems } = context;
  const isOpen = openItems.includes(props.value || '');

  return (
    <div
      className={cn(
        'overflow-hidden text-sm transition-all',
        isOpen ? 'animate-accordion-down' : 'animate-accordion-up'
      )}
      {...props}
    >
      <div className={cn('pb-4 pt-0', className)}>
        {children}
      </div>
    </div>
  );
};

// Wrapper component for easier usage
export const AccordionItemWrapper: React.FC<{
  value: string;
  children: React.ReactNode;
  className?: string;
}> = ({ value, children, className }) => (
  <AccordionItem value={value} className={className}>
    {children}
  </AccordionItem>
);