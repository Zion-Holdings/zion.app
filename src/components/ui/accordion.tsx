import React from 'react';

interface AccordionProps {
  children: React.ReactNode;
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  className?: string;
}

export function Accordion({ children, type = 'single', collapsible = false, className = '' }: AccordionProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}

export function AccordionItem({ children, value, className = '' }: { children: React.ReactNode; value: string; className?: string }) {
  return (
    <div className={`border-b ${className}`}>
      {children}
    </div>
  );
}

export function AccordionTrigger({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 ${className}`}>
      {children}
    </div>
  );
}

export function AccordionContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ${className}`}>
      <div className="pb-4 pt-0">
        {children}
      </div>
    </div>
  );
}