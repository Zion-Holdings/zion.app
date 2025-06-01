import { toast as hotToast } from 'react-hot-toast';

export const useToast = () => ({ toast: hotToast });

export const toast = Object.assign(hotToast, {
  success: (msg: string) => hotToast.success(msg),
  error: (msg: string) => hotToast.error(msg)
});
