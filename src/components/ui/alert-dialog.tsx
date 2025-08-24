import React from 'react';
import { cn } from '@/lib/utils';

interface AlertDialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface AlertDialogTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

interface AlertDialogContentProps {
  children: React.ReactNode;
  className?: string;
}

interface AlertDialogHeaderProps {
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

interface AlertDialogFooterProps {
  children: React.ReactNode;
  className?: string;
}

interface AlertDialogActionProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

interface AlertDialogCancelProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({ children, open, onOpenChange }) => {
  return (
    <div className={cn("fixed inset-0 z-50 flex items-center justify-center", open ? "block" : "hidden")}>
      <div className="fixed inset-0 bg-black/50" onClick={() => onOpenChange?.(false)} />
      <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full mx-4">
        {children}
      </div>
    </div>
  );
};

export const AlertDialogTrigger: React.FC<AlertDialogTriggerProps> = ({ children, asChild }) => {
  if (asChild) {
    return <>{children}</>;
  }
  return <div className="cursor-pointer">{children}</div>;
};

export const AlertDialogContent: React.FC<AlertDialogContentProps> = ({ children, className }) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

export const AlertDialogHeader: React.FC<AlertDialogHeaderProps> = ({ children, className }) => {
  return <div className={cn("mb-4", className)}>{children}</div>;
};

export const AlertDialogTitle: React.FC<AlertDialogTitleProps> = ({ children, className }) => {
  return <h2 className={cn("text-lg font-semibold text-gray-900", className)}>{children}</h2>;
};

export const AlertDialogDescription: React.FC<AlertDialogDescriptionProps> = ({ children, className }) => {
  return <p className={cn("text-sm text-gray-600", className)}>{children}</p>;
};

export const AlertDialogFooter: React.FC<AlertDialogFooterProps> = ({ children, className }) => {
  return <div className={cn("flex justify-end space-x-2", className)}>{children}</div>;
};

export const AlertDialogAction: React.FC<AlertDialogActionProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",
        className
      )}
    >
      {children}
    </button>
  );
};

export const AlertDialogCancel: React.FC<AlertDialogCancelProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300 transition-colors",
        className
      )}
    >
      {children}
    </button>
  );
};