import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AlertDialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface AlertDialogTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
  onClick?: () => void;
  onOpenChange?: (open: boolean) => void;
}

interface AlertDialogContentProps {
  children: React.ReactNode;
  className?: string;
}

interface AlertDialogHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface AlertDialogFooterProps {
  children: React.ReactNode;
  className?: string;
}

interface AlertDialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface AlertDialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

interface AlertDialogActionProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface AlertDialogCancelProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({ children, open = false, onOpenChange }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleOpenChange = (newOpen: boolean) => {
    setIsOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  return (
    <div className={cn("relative", isOpen && "z-50")}>
      {children}
    </div>
  );
};

export const AlertDialogTrigger: React.FC<AlertDialogTriggerProps> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      {children}
    </div>
  );
};

export const AlertDialogContent: React.FC<AlertDialogContentProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",
        className
      )}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        {children}
      </div>
    </div>
  );
};

export const AlertDialogHeader: React.FC<AlertDialogHeaderProps> = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 p-6", className)}>
      {children}
    </div>
  );
};

export const AlertDialogFooter: React.FC<AlertDialogFooterProps> = ({ children, className }) => {
  return (
    <div className={cn("flex items-center justify-end space-x-2 p-6 pt-0", className)}>
      {children}
    </div>
  );
};

export const AlertDialogTitle: React.FC<AlertDialogTitleProps> = ({ children, className }) => {
  return (
    <h2 className={cn("text-lg font-semibold text-gray-900", className)}>
      {children}
    </h2>
  );
};

export const AlertDialogDescription: React.FC<AlertDialogDescriptionProps> = ({ children, className }) => {
  return (
    <p className={cn("text-sm text-gray-600", className)}>
      {children}
    </p>
  );
};

export const AlertDialogAction: React.FC<AlertDialogActionProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const AlertDialogCancel: React.FC<AlertDialogCancelProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};