import React from "react";
import {
  useToast as useToastHook,
  Toast,
} from "@/components/ui/toast";

// Extend the Toast component props with common toast options
export type ToastOptions = React.ComponentPropsWithoutRef<typeof Toast> & {
  description?: string;
  title?: string;
  variant?: "default" | "destructive" | "success";
};

export const useToast = useToastHook;

// Base toast function that delegates to the implementation from `useToastHook`.
function baseToast(props: ToastOptions) {
  const { toast } = useToastHook();
  toast(props);
}

// Convenience helpers mirroring common toast variants.
baseToast.title = (title: string) => {
  baseToast({ title });
};

baseToast.description = (description: string) => {
  baseToast({ description });
};

baseToast.error = (error: string) => {
  baseToast({ variant: "destructive", title: "Error", description: error });
};

baseToast.success = (message: string) => {
  baseToast({ variant: "success", title: "Success", description: message });
};

// Export the callable toast function.
export const toast = baseToast as typeof baseToast & {
  title: (title: string) => void;
  description: (description: string) => void;
  error: (error: string) => void;
  success: (message: string) => void;
};
