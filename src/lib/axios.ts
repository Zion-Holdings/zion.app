export interface AxiosError extends Error {
  response?: { status: number; data?: any };
}

type FulfilledFn = (value: any) => any | Promise<any>;
type RejectedFn = (error: any) => any | Promise<any>;

class InterceptorManager {
  handlers: { fulfilled?: FulfilledFn; rejected?: RejectedFn }[] = [];
  use(fulfilled?: FulfilledFn, rejected?: RejectedFn) {
    this.handlers.push({ fulfilled, rejected });
  }
}

export interface AxiosInstance {
  defaults: { headers: { common: Record<string, string> } };
  interceptors: { response: InterceptorManager };
  get(url: string, config?: { params?: Record<string, any> } & RequestInit): Promise<any>;
  post(url: string, data?: any, config?: RequestInit): Promise<any>;
}

export function create(config: { baseURL?: string; withCredentials?: boolean } = {}): AxiosInstance {
  const baseURL = config.baseURL || '';
  const withCreds = !!config.withCredentials;

  const instance: AxiosInstance = {
    defaults: { headers: { common: {} } },
    interceptors: { response: new InterceptorManager() },
    async get(url, init = {}) {
      const params = (init as any).params
        ? '?' + new URLSearchParams((init as any).params).toString()
        : '';
      const headers = {
        ...instance.defaults.headers.common,
        ...(init as any).headers,
      };
      const opts = { ...init, headers } as RequestInit;
      delete (opts as any).params;
      return request(baseURL + url + params, 'GET', opts);
    },
    async post(url, data = {}, init = {}) {
      const headers = {
        'Content-Type': 'application/json',
        ...instance.defaults.headers.common,
        ...(init as any).headers,
      };
      const opts = { ...init, body: JSON.stringify(data), headers } as RequestInit;
      return request(baseURL + url, 'POST', opts);
    },
  };

  async function request(url: string, method: string, init: RequestInit) {
    const response = await fetch(url, { ...init, method, credentials: withCreds ? 'include' : init.credentials });
    let data: any = null;
    try {
      data = await response.clone().json();
    } catch {}
    const result = { data, status: response.status };
    if (response.ok) {
      let res: any = result;
      for (const h of instance.interceptors.response.handlers) {
        if (h.fulfilled) {
          res = await h.fulfilled(res);
        }
      }
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  instance.interceptors.response.use(
    (response: any) => response,
    (error: any) => {
      if (error?.response?.status === 401) {
        // Handle unauthorized access
        if (typeof window !== 'undefined') {
          safeStorage.removeItem('auth-token');
          window.location.href = '/auth/login';
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

// Export the function instead of calling it immediately to avoid temporal dead zone issues
export default createAxiosInstance;
