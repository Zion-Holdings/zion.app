import { safeStorage } from '../../utils/safeStorage';

export const supabaseStorageAdapter = {
  async getItem(key: string): Promise<string | null> {
    return safeStorage.getItem(key);
  },
  async setItem(key: string, value: string): Promise<void> {
    safeStorage.setItem(key, value);
  },
  async removeItem(key: string): Promise<void> {
    safeStorage.removeItem(key);
  },
};

