import React from 'react';

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, className = '' }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

const AccordionItem: React.FC<AccordionProps> = ({ children, className = '' }) => {
  return (
    <div className={`border-b ${className}`}>
      {children}
    </div>
  );
};

const AccordionTrigger: React.FC<AccordionProps> = ({ children, className = '' }) => {
  return (
    <button className={`flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 ${className}`}>
      {children}
    </button>
  );
};

const AccordionContent: React.FC<AccordionProps> = ({ children, className = '' }) => {
  return (
    <div className={`overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ${className}`}>
      <div className="pb-4 pt-0">
        {children}
      </div>
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
