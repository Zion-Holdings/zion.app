import { toast } from 'react-hot-toast';

export interface ToastError {
  code?: string | number;
  message: string;
}

export const showError = (
  id: string | number,
  error: string | ToastError
): void => {
  // `isActive` exists at runtime but may be missing from the type
  // definitions of `react-hot-toast`. Cast to `any` to access it safely.
  if ((toast as any).isActive?.(id)) return;
  const text = typeof error === 'string'
    ? error
    : error.code
    ? `${error.code}: ${error.message}`
    : error.message;
  toast.error(String(text), { id: String(id) });
};
