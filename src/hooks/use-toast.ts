import { useToast as useToastHook } from "@/components/ui/toast";

export const useToast = useToastHook;

export const toast = {
  title: (title: string) => {
    const { toast } = useToast();
    toast({
      title,
    });
  },
  description: (description: string) => {
    const { toast } = useToast();
    toast({
      description,
    });
  },
  error: (error: string) => {
    const { toast } = useToast();
    toast({
      variant: "destructive",
      title: "Error",
      description: error,
    });
  },
  success: (message: string) => {
    const { toast } = useToast();
    toast({
      title: "Success",
      description: message,
    });
  },
};