import React, { useState } from 'react';

interface CollapsibleProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Collapsible({ 
  trigger, 
  children, 
  defaultOpen = false, 
  open: controlledOpen, 
  onOpenChange 
}: CollapsibleProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  
  const handleToggle = () => {
    const newOpen = !isOpen;
    if (controlledOpen !== undefined) {
      onOpenChange?.(newOpen);
    } else {
      setInternalOpen(newOpen);
    }
  };

  return (
    <div className="w-full">
      <button
        onClick={handleToggle}
        className="w-full flex items-center justify-between p-3 text-left hover:bg-zion-slate/5 rounded-lg transition-colors"
      >
        {trigger}
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 p-3 bg-zion-slate/5 rounded-lg">
          {children}
        </div>
      )}
    </div>
  );
}

export function CollapsibleTrigger({ 
  children, 
  asChild = false,
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  if (asChild) {
    return <>{children}</>;
  }
  return <button {...props}>{children}</button>;
}

export function CollapsibleContent({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props}>{children}</div>;
}