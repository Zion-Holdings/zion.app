import { safeStorage } from '@/utils/safeStorage';

export const supabaseStorageAdapter = {
  _getItem: (key: string) => {
    return safeStorage.getItem(key);
  },
  setItem: (key: string, _value: string) => {
    safeStorage.setItem(key, value);
  },
  _removeItem: (key: string) => {
    safeStorage.removeItem(key);
  },
};

