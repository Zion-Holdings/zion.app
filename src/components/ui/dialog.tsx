import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DialogContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export function Dialog({ 
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
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="relative">
        {children}
      </div>
    </DialogContext.Provider>
  );
}

export function DialogTrigger({ children, asChild = false }: { children: ReactNode; asChild?: boolean }) {
  const context = useContext(DialogContext);
  if (!context) throw new Error('DialogTrigger must be used within Dialog');

  if (asChild) {
    return (
      <div onClick={() => context.setIsOpen(true)}>
        {children}
      </div>
    );
  }

  return (
    <div onClick={() => context.setIsOpen(true)}>
      {children}
    </div>
  );
}

export function DialogContent({ children, className = '' }: { children: ReactNode; className?: string }) {
  const context = useContext(DialogContext);
  if (!context) throw new Error('DialogContent must be used within Dialog');

  if (!context.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => context.setIsOpen(false)} />
      <div className={`relative bg-white rounded-lg p-6 max-w-md w-full mx-4 ${className}`}>
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function DialogTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;
}

export function DialogDescription({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-gray-600 mt-2 ${className}`}>{children}</p>;
}

export function DialogFooter({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`flex justify-end gap-2 mt-6 ${className}`}>{children}</div>;
}