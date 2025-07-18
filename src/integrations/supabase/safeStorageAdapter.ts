<<<<<<< HEAD
import { safeStorage } from '@/utils/safeStorage;;
'
export const _supabaseStorageAdapter: {;",;"
  _getItem: (key: string) => {;"
    return safeStorage.getItem(key);"
  },;
  setItem: (key: string, _value: string) => {;
    safeStorage.setItem(key, value);
  },;
  _removeItem: (key: string) => {;"
    safeStorage.removeItem(key);";"
  },;"
};"
"""""
=======
import { safeStorage } from '@/utils/safeStorage;'
;'';
export const _supabaseStorageAdapter: unknown "unknown = {;",;";""
  _getItem: (key: string) => {;";";""
    return safeStorage.getItem(key);";";";""
  },;;
  setItem: "(key: string", _value: string) => {;"
    safeStorage.setItem(key, value);
  },;
  _removeItem: (key: string) => {;""
    safeStorage.removeItem(key);";""
  },;";";""
};";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
