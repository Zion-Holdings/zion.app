import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DropdownMenuContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const DropdownMenuContext = createContext<DropdownMenuContextType | undefined>(undefined);

export function DropdownMenu({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenuContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="relative">
        {children}
      </div>
    </DropdownMenuContext.Provider>
  );
}

export function DropdownMenuTrigger({ children, asChild = false }: { children: ReactNode; asChild?: boolean }) {
  const context = useContext(DropdownMenuContext);
  if (!context) throw new Error('DropdownMenuTrigger must be used within DropdownMenu');

  if (asChild) {
    return (
      <div onClick={() => context.setIsOpen(!context.isOpen)}>
        {children}
      </div>
    );
  }

  return (
    <div onClick={() => context.setIsOpen(!context.isOpen)}>
      {children}
    </div>
  );
}

export function DropdownMenuContent({ 
  children, 
  align = 'start',
  className = '' 
}: { 
  children: ReactNode;
  align?: 'start' | 'center' | 'end';
  className?: string;
}) {
  const context = useContext(DropdownMenuContext);
  if (!context) throw new Error('DropdownMenuContent must be used within DropdownMenu');

  if (!context.isOpen) return null;

  const alignClasses = {
    start: 'left-0',
    center: 'left-1/2 transform -translate-x-1/2',
    end: 'right-0'
  };

  return (
    <div className={`absolute z-50 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200 ${alignClasses[align]} ${className}`}>
      {children}
    </div>
  );
}

export function DropdownMenuItem({ 
  children, 
  onClick,
  asChild = false,
  className = ''
}: { 
  children: ReactNode;
  onClick?: () => void;
  asChild?: boolean;
  className?: string;
}) {
  const context = useContext(DropdownMenuContext);
  if (!context) throw new Error('DropdownMenuItem must be used within DropdownMenu');

  const handleClick = () => {
    if (onClick) onClick();
    context.setIsOpen(false);
  };

  if (asChild) {
    return (
      <div className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <button
      className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}