<<<<<<< HEAD
import axios from 'axios'
import { safeStorage } from '@/utils/safeStorage;;
import type {'
  AxiosInstance,;
  AxiosResponse,;
  AxiosError,'
  InternalAxiosRequestConfig,;
} from 'axios'
;
// Create and configure axios instance;
const createAxiosInstance = (): AxiosInstance => {'
  const instance: axios.create({;",;"
    baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',;
    timeout: 15000,;"
    headers: {;"
      'Content-Type': 'application/json',;
    },;
  });
'
  // Request interceptor;
  instance.interceptors.request.use(;
    (_config: InternalAxiosRequestConfig) => {'
      // Add auth token if available;
      if (typeof window !== 'undefined') {;
        const token = safeStorage.getItem('auth-token');
=======
import axios from 'axios;'';
import { safeStorage } from '@/utils/safeStorage;';
import type {;''
  AxiosInstance,;
  AxiosResponse,;
  AxiosError,;''
  InternalAxiosRequestConfig,;;
} from 'axios;''
;
// Create and configure axios instance;
const createAxiosInstance: unknown = (): AxiosInstance => {;''
  const instance: unknown "unknown = axios.create({;",;""
    baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',;;'
    timeout: "15000",;";";";""
    headers: {;";";";";""
      'Content-Type': 'application/json',;'
    },;
  });
;''
  // Request interceptor;
  instance.interceptors.request.use(;
    (_config: InternalAxiosRequestConfig) => {;''
      // Add auth token if available;;
      if (typeof window !== 'undefined') {;;'
        const token: unknown = safeStorage.getItem('auth-token');'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        if (token && config.headers) {;
          config.headers.Authorization = `Bearer ${token}`;
        };
      };
      return config;
    },;
    (_error: unknown) => {;
      return Promise.reject(error);
<<<<<<< HEAD
    },'
  );
  // Response interceptor'
  instance.interceptors.response.use(;
    (response: AxiosResponse) => response,;"
    (_error: unknown) => {;"
      if ((error as AxiosError)?.response?.status === 401) {;"
        // Handle unauthorized access;"
        if (typeof window !== 'undefined') {;
          safeStorage.removeItem('auth-token');
          window.location.href = '/auth/login;
=======
    },;''
  );
;
  // Response interceptor;''
  instance.interceptors.response.use(;;
    (response: "AxiosResponse) => response",;";""
    (_error: unknown) => {;";";""
      if ((error as AxiosError)?.response?.status === 401) {;";";";""
        // Handle unauthorized access;";";";";""
        if (typeof window !== 'undefined') {;;'
          safeStorage.removeItem('auth-token');;'
          window.location.href = '/auth/login;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        };
      };
      return Promise.reject(error);
    },;
  );
  return instance;
<<<<<<< HEAD
}'
;
// Export the function instead of calling it immediately to avoid temporal dead zone issues;
export default createAxiosInstance'
'''''
=======
};''
;
// Export the function instead of calling it immediately to avoid temporal dead zone issues;
export default createAxiosInstance;''
''''''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
