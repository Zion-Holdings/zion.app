<<<<<<< HEAD


interface AccordionProps {
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  children: React.ReactNode;
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

export function Accordion({ type = 'single', collapsible = false, children }: AccordionProps) {
  return (
    <div className="w-full">
      {children}
    </div>
  );
}

export function AccordionItem({ value, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border border-zion-slate rounded-lg mb-2">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isOpen, setIsOpen } as any);
        }
        return child;
      })}
    </div>
  );
}

export function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  return (
    <button className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-zion-blue-light transition-colors ${className || ''}`}>
      {children}
      <span className="text-zion-cyan">+</span>
    </button>
  );
}

export function AccordionContent({ children, className }: AccordionContentProps) {
  return (
    <div className={`px-4 pb-3 ${className || ''}`}>
      {children}
    </div>
  );
}
=======
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
  onToggle: (value: string) => void;
} | undefined>(undefined);

export const Accordion: React.FC<AccordionProps> = ({
  type = 'single',
  collapsible = false,
  defaultValue,
  value,
  onValueChange,
  children,
  className,
  ...props
}) => {
  const [openItems, setOpenItems] = React.useState<string[]>(
    defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []
  );

  const handleToggle = (itemValue: string) => {
    if (type === 'single') {
      const newOpenItems = openItems.includes(itemValue) ? [] : [itemValue];
      setOpenItems(newOpenItems);
      onValueChange?.(newOpenItems);
    } else {
      const newOpenItems = openItems.includes(itemValue)
        ? openItems.filter(item => item !== itemValue)
        : [...openItems, itemValue];
      setOpenItems(newOpenItems);
      onValueChange?.(newOpenItems);
    }
  };

  React.useEffect(() => {
    if (value !== undefined) {
      setOpenItems(Array.isArray(value) ? value : [value]);
    }
  }, [value]);

  return (
    <AccordionContext.Provider
      value={{
        type,
        collapsible,
        openItems,
        onToggle: handleToggle
      }}
    >
      <div className={cn('space-y-2', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem: React.FC<AccordionItemProps> = ({
  value,
  disabled = false,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'border rounded-lg',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
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
  if (!context) {
    throw new Error('AccordionTrigger must be used within Accordion');
  }

  const { onToggle, openItems } = context;
  const isOpen = openItems.includes(props.value || '');

  return (
    <button
      type="button"
      className={cn(
        'flex w-full items-center justify-between p-4 text-left font-medium transition-all hover:bg-gray-50 [&[data-state=open]>svg]:rotate-180',
        className
      )}
      onClick={() => onToggle(props.value || '')}
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
  if (!context) {
    throw new Error('AccordionContent must be used within Accordion');
  }

  const { openItems } = context;
  const isOpen = openItems.includes(props.value || '');

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className
      )}
      {...props}
    >
      <div className="p-4 pt-0">{children}</div>
    </div>
  );
};

export const AccordionItemWrapper: React.FC<AccordionItemProps> = (props) => {
  return (
    <AccordionItem {...props}>
      <AccordionTrigger value={props.value}>
        {props.children}
      </AccordionTrigger>
      <AccordionContent value={props.value}>
        Content for {props.value}
      </AccordionContent>
    </AccordionItem>
  );
};
>>>>>>> 2d0a9714a42cb6b8a431feb1f9dc2a642983276c
