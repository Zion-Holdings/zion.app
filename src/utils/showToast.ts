import { toast } from 'react-hot-toast';

export interface ToastError {
  code?: string | number;
  message: string;
}

export const showError = (
  id: string | number,
  error: string | ToastError
): void => {
  if (toast.isActive(id)) return;
  const text = typeof error === 'string'
    ? error
    : error.code
    ? `${error.code}: ${error.message}`
    : error.message;
  toast.error(text, { id });
};
