import React, { createContext, useContext, useState } from 'react';

interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

interface AccordionProps {
  type?: 'single' | 'multiple';
  children: React.ReactNode;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ 
  type = 'single', 
  children, 
  className = '' 
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    if (type === 'single') {
      setOpenItems(openItems.includes(value) ? [] : [value]);
    } else {
      setOpenItems(prev => 
        prev.includes(value) 
          ? prev.filter(item => item !== value)
          : [...prev, value]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={`space-y-2 ${className}`}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ value, children, className = '' }) => {
  return (
    <div className={`border rounded-lg ${className}`}>
      {children}
    </div>
  );
};

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children, className = '' }) => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('AccordionTrigger must be used within Accordion');
  
  const { openItems, toggleItem } = context;
  const itemValue = React.useContext(AccordionItemContext);
  if (!itemValue) throw new Error('AccordionTrigger must be used within AccordionItem');
  
  const isOpen = openItems.includes(itemValue);
  
  return (
    <button
      className={`flex w-full items-center justify-between py-4 px-6 text-left font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 ${className}`}
      onClick={() => toggleItem(itemValue)}
    >
      {children}
      <svg
        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({ children, className = '' }) => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('AccordionContent must be used within Accordion');
  
  const { openItems } = context;
  const itemValue = React.useContext(AccordionItemContext);
  if (!itemValue) throw new Error('AccordionContent must be used within AccordionItem');
  
  const isOpen = openItems.includes(itemValue);
  
  if (!isOpen) return null;
  
  return (
    <div className={`overflow-hidden text-sm transition-all ${className}`}>
      <div className="pb-4 pt-0 px-6">
        {children}
      </div>
    </div>
  );
};

interface AccordionItemContextType {
  value: string;
}

const AccordionItemContext = React.createContext<AccordionItemContextType | undefined>(undefined);

// Wrapper to provide item context
export const AccordionItemWrapper: React.FC<{ value: string; children: React.ReactNode }> = ({ value, children }) => {
  return (
    <AccordionItemContext.Provider value={value}>
      <AccordionItem value={value}>
        {children}
      </AccordionItem>
    </AccordionItemContext.Provider>
  );
};