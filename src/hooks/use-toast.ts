
import { toast as sonnerToast, ToastT } from "sonner";
import { ReactNode } from "react";

export interface ToastProps {
  title?: string | ReactNode;
  description?: string | ReactNode;
  variant?: "default" | "destructive" | "success";
  action?: {
    label: string;
    onClick: () => void;
  };
  cancel?: {
    label: string;
    onClick: () => void;
  };
  duration?: number;
}

export function toast({ 
  title, 
  description, 
  variant = "default",
  action,
  cancel,
  duration = 5000
}: ToastProps) {
  return sonnerToast(title as string, {
    description,
    duration,
    className: 
      variant === "destructive" 
        ? "bg-destructive text-destructive-foreground" 
        : variant === "success"
        ? "bg-green-900 text-green-50 border-green-700" 
        : undefined,
    action: action ? {
      label: action.label,
      onClick: action.onClick,
    } : undefined,
    cancel: cancel ? {
      label: cancel.label,
      onClick: cancel.onClick,
    } : undefined,
  });
}

export const useToast = () => {
  return { toast };
};
