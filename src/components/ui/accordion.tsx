
import React from 'react';

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

export function Accordion({ children }: AccordionProps) {
  return (
    <div className="w-full">
      {children}
    </div>
  );
}

export function AccordionItem({ children }: AccordionItemProps) {
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