import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PopoverContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const PopoverContext = createContext<PopoverContextType | undefined>(undefined);

export function Popover({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PopoverContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="relative">
        {children}
      </div>
    </PopoverContext.Provider>
  );
}

export function PopoverTrigger({ children, className = '' }: { children: ReactNode; className?: string }) {
  const context = useContext(PopoverContext);
  if (!context) throw new Error('PopoverTrigger must be used within Popover');

  return (
    <div className={className} onClick={() => context.setIsOpen(!context.isOpen)}>
      {children}
    </div>
  );
}

export function PopoverContent({ children, className = '' }: { children: ReactNode; className?: string }) {
  const context = useContext(PopoverContext);
  if (!context) throw new Error('PopoverContent must be used within Popover');

  if (!context.isOpen) return null;

  return (
    <div className={`absolute z-50 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 p-4 ${className}`}>
      {children}
    </div>
  );
}