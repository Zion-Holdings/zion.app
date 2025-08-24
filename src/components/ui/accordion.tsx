import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  children: React.ReactNode;
  className?: string;
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isOpen?: boolean;
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ type = 'single', collapsible = false, children, className }) => {
  return (
    <div className={cn("w-full", className)}>
      {children}
    </div>
  );
};

export const AccordionItem: React.FC<AccordionItemProps> = ({ value, children, className }) => {
  return (
    <div className={cn("border-b", className)}>
      {children}
    </div>
  );
};

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children, className, onClick, isOpen }) => {
  return (
    <button
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      onClick={onClick}
    >
      {children}
      <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
    </button>
  );
};

export const AccordionContent: React.FC<AccordionContentProps> = ({ children, className, isOpen }) => {
  return (
    <div className={cn(
      "overflow-hidden text-sm transition-all",
      isOpen ? "max-h-96 pb-4" : "max-h-0"
    )}>
      <div className={cn("pb-4 pt-0", className)}>
        {children}
      </div>
    </div>
  );
};