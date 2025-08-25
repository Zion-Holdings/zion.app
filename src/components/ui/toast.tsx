import React from 'react';

interface ToastProps {
  children: React.ReactNode;
  className?: string;
}

interface ToastActionProps {
  children: React.ReactNode;
  className?: string;
}

interface ToastCloseProps {
  children: React.ReactNode;
  className?: string;
}

interface ToastDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

interface ToastTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface ToastViewportProps {
  children: React.ReactNode;
  className?: string;
}

const Toast: React.FC<ToastProps> = ({ children, className = '' }) => {
  return (
    <div className={`group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full ${className}`}>
      {children}
    </div>
  );
};

const ToastAction: React.FC<ToastActionProps> = ({ children, className = '' }) => {
  return (
    <div className={`inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive ${className}`}>
      {children}
    </div>
  );
};

const ToastClose: React.FC<ToastCloseProps> = ({ children, className = '' }) => {
  return (
    <button className={`absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 ${className}`}>
      {children}
    </button>
  );
};

const ToastDescription: React.FC<ToastDescriptionProps> = ({ children, className = '' }) => {
  return (
    <div className={`text-sm opacity-90 ${className}`}>
      {children}
    </div>
  );
};

const ToastTitle: React.FC<ToastTitleProps> = ({ children, className = '' }) => {
  return (
    <div className={`text-sm font-semibold [&+div]:mt-1 ${className}`}>
      {children}
    </div>
  );
};

const ToastViewport: React.FC<ToastViewportProps> = ({ children, className = '' }) => {
  return (
    <div className={`fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px] ${className}`}>
      {children}
    </div>
  );
};

export { Toast, ToastAction, ToastClose, ToastDescription, ToastTitle, ToastViewport };