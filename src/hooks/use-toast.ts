import {
  useToast as useToastHook,
  type ToastProps,
} from "@/components/ui/toast";

export const useToast = useToastHook;

// Base toast function that delegates to the implementation from `useToastHook`.
function baseToast(props: ToastProps) {
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
  baseToast({ title: "Success", description: message });
};

// Export the callable toast function.
export const toast = baseToast as typeof baseToast & {
  title: (title: string) => void;
  description: (description: string) => void;
  error: (error: string) => void;
  success: (message: string) => void;
};
