import React from "react"
import { cn } from "@/lib/utils"
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react"

export interface SonnerProps {
  children: React.ReactNode;
  className?: string;
}

export function Sonner({ children, className }: SonnerProps) {
  return (
    <div className={cn("fixed top-4 right-4 z-50", className)}>
      {children}
    </div>
  );
}

export interface ToastProps {
  title: string;
  description?: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  onClose?: () => void;
  className?: string;
}

const toastIcons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle
};

const toastColors = {
  success: 'border-green-500 bg-green-500/10 text-green-500',
  error: 'border-red-500 bg-red-500/10 text-red-500',
  info: 'border-blue-500 bg-blue-500/10 text-blue-500',
  warning: 'border-yellow-500 bg-yellow-500/10 text-yellow-500'
};

export function Toast({ title, description, type = 'info', onClose, className }: ToastProps) {
  const Icon = toastIcons[type];

  return (
    <div className={cn(
      "flex items-start space-x-3 rounded-lg border p-4 shadow-lg backdrop-blur-sm",
      toastColors[type],
      className
    )}>
      <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
      <div className="flex-1">
        <h4 className="font-medium">{title}</h4>
        {description && (
          <p className="mt-1 text-sm opacity-90">{description}</p>
        )}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

export { Toaster } from './toast';
