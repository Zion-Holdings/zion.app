import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AlertDialogContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const AlertDialogContext = createContext<AlertDialogContextType | undefined>(undefined);

export function AlertDialog({ 
  children, 
  open, 
  onOpenChange 
}: { 
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const setIsOpen = (newOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(newOpen);
    }
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
  };

  return (
    <AlertDialogContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="relative">
        {children}
      </div>
    </AlertDialogContext.Provider>
  );
}

export function AlertDialogTrigger({ children }: { children: ReactNode }) {
  const context = useContext(AlertDialogContext);
  if (!context) throw new Error('AlertDialogTrigger must be used within AlertDialog');

  return (
    <div onClick={() => context.setIsOpen(true)}>
      {children}
    </div>
  );
}

export function AlertDialogContent({ children, className = '' }: { children: ReactNode; className?: string }) {
  const context = useContext(AlertDialogContext);
  if (!context) throw new Error('AlertDialogContent must be used within AlertDialog');

  if (!context.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" />
      <div className={`relative bg-white rounded-lg p-6 max-w-md w-full mx-4 ${className}`}>
        {children}
      </div>
    </div>
  );
}

export function AlertDialogHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function AlertDialogTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;
}

export function AlertDialogDescription({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-gray-600 mt-2 ${className}`}>{children}</p>;
}

export function AlertDialogFooter({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`flex justify-end gap-2 mt-6 ${className}`}>{children}</div>;
}

export function AlertDialogAction({ children, onClick, className = '' }: { children: ReactNode; onClick?: () => void; className?: string }) {
  const context = useContext(AlertDialogContext);
  if (!context) throw new Error('AlertDialogAction must be used within AlertDialog');

  const handleClick = () => {
    if (onClick) onClick();
    context.setIsOpen(false);
  };

  return (
    <button
      className={`px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export function AlertDialogCancel({ children, className = '' }: { children: ReactNode; className?: string }) {
  const context = useContext(AlertDialogContext);
  if (!context) throw new Error('AlertDialogCancel must be used within AlertDialog');

  return (
    <button
      className={`px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors ${className}`}
      onClick={() => context.setIsOpen(false)}
    >
      {children}
    </button>
  );
}