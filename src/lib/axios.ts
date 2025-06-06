
import { safeStorage } from '../utils/safeStorage';


export interface AxiosResponse<T = any> {
  data: T;
  status: number;
}

export interface AxiosError<T = any> extends Error {
  response?: AxiosResponse<T>;
}

type FulfilledFn = (value: any) => any | Promise<any>;
type RejectedFn = (error: any) => any | Promise<any>;

class InterceptorManager {
  handlers: ({ fulfilled?: FulfilledFn; rejected?: RejectedFn } | null)[] = [];
  use(fulfilled?: FulfilledFn, rejected?: RejectedFn): number {
    this.handlers.push({ fulfilled, rejected });
    return this.handlers.length - 1;
  }
  eject(id: number) {
    if (this.handlers[id]) {
      this.handlers[id] = {};
    }
  }
}

export interface AxiosInstance {
  interceptors: { request: InterceptorManager; response: InterceptorManager };
  get<T = any>(
    url: string,
    config?: { params?: Record<string, any> } & RequestInit
  ): Promise<AxiosResponse<T>>;
  post<T = any>(
    url: string,
    data?: any,
    config?: RequestInit
  ): Promise<AxiosResponse<T>>;
}

export interface AxiosStatic {
  create: typeof create;
  defaults: AxiosDefaults;
  interceptors: { request: InterceptorManager; response: InterceptorManager };
  get: AxiosInstance['get'];
  post: AxiosInstance['post'];
}

interface AxiosDefaults {
  headers: { common: Record<string, string> };
}

const globalDefaults: AxiosDefaults = {
  headers: { common: {} },
};

const globalInterceptors = {
  request: new InterceptorManager(),
  response: new InterceptorManager(),
};

export function create(config: { baseURL?: string; withCredentials?: boolean } = {}): AxiosInstance {
  const baseURL = config.baseURL || '';
  const withCreds = !!config.withCredentials;

  const instance: AxiosInstance = {
    interceptors: { request: new InterceptorManager(), response: new InterceptorManager() },
    async get<T = any>(url, init: { params?: Record<string, any> } & RequestInit = {} as any) {
      const params = (init as any).params
        ? '?' + new URLSearchParams((init as any).params).toString()
        : '';
      const opts = { ...init } as RequestInit;
      delete (opts as any).params;
      return request<T>(baseURL + url + params, 'GET', opts);
    },
    async post<T = any>(url, data: any = {}, init: RequestInit = {}) {
      const headers = {
        'Content-Type': 'application/json',
        ...(init as any).headers,
      };
      const opts = { ...init, body: JSON.stringify(data), headers } as RequestInit;
      return request<T>(baseURL + url, 'POST', opts);
    },
  };

  // Include global interceptors on the instance
  instance.interceptors.request.handlers.push(
    ...globalInterceptors.request.handlers
  );
  instance.interceptors.response.handlers.push(
    ...globalInterceptors.response.handlers
  );

  async function request<T>(url: string, method: string, init: RequestInit): Promise<AxiosResponse<T>> {
    let reqInit = { ...init };
    // Run request interceptors
    for (const h of instance.interceptors.request.handlers) {
      try {
        if (h.fulfilled) {
          const res = await h.fulfilled(reqInit);
          if (res) reqInit = res;
        }
      } catch (err) {
        if (h.rejected) {
          await h.rejected(err);
        }
      }
    }

    // Read authToken from cookies
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {} as Record<string, string>);
    const authToken = cookies['authToken'] || safeStorage.getItem('token');

    const headers = { ...globalDefaults.headers.common, ...reqInit.headers };
    if (authToken) {
      headers['Authorization'] = `Bearer ${authToken}`;
    }

    const response = await fetch(url, {
      ...reqInit,
      method,
      headers,
      credentials: withCreds ? 'include' : reqInit.credentials,
    });
    let data: any = null;
    try {
      data = await response.clone().json();
    } catch {}
    const result: AxiosResponse<T> = { data, status: response.status };
    if (response.ok) {
      let res: any = result;
      for (const h of instance.interceptors.response.handlers) {
        if (h.fulfilled) {
          res = await h.fulfilled(res);
        }
      }
      return res;
    } else {
      const err: AxiosError = Object.assign(new Error('Request failed'), {
        response: result,
        config: { url, method },
      });
      for (const h of instance.interceptors.response.handlers) {
        if (h.rejected) {
          await h.rejected(err);
        }
      }
      throw err;
    }
  }

  return instance;
}

const defaultInstance = create();

const axios: AxiosStatic = {
  create,
  defaults: globalDefaults,
  interceptors: globalInterceptors,
  get: defaultInstance.get,
  post: defaultInstance.post,
};

export default axios;
