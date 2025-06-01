import { toast } from '@/hooks/use-toast';

const originalConsoleError = console.error;

console.error = (...args: any[]) => {
  try {
    const first = args[0];
    const message = first instanceof Error ? first.message : String(first);
    toast.error(message);
  } catch {}
  originalConsoleError(...args);
};
