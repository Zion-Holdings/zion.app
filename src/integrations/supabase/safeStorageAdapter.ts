import { safeStorage } from '@/utils/safeStorage';

export const supabaseStorageAdapter = {
  getItem: (key: string) => {
    return safeStorage.getItem(key);
  },
  setItem: (key: string, value: string) => {
    safeStorage.setItem(key, value);
  },
  removeItem: (key: string) => {
    safeStorage.removeItem(key);
  },
};

