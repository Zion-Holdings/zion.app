import { toast } from 'react-hot-toast';

export const showError = (id: string | number, msg: string): void => {
  if (!toast.isActive(id)) {
    toast.error(msg, { id });
  }
};

