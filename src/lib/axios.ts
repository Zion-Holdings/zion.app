
import { safeStorage } from '@/utils/safeStorage';


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

export interface RequestConfig extends RequestInit {
  withCredentials?: boolean;
}

export interface AxiosInstance {
  interceptors: { request: InterceptorManager; response: InterceptorManager };
  get<T = any>(
    url: string,
    config?: { params?: Record<string, any> } & RequestConfig
  ): Promise<AxiosResponse<T>>;
  post<T = any>(
    url: string,
    data?: any,
    config?: RequestConfig
  ): Promise<AxiosResponse<T>>;
  patch<T = any>(url: string, data?: any, config?: RequestConfig): Promise<AxiosResponse<T>>;
  delete<T = any>(url: string, config?: RequestConfig): Promise<AxiosResponse<T>>;
}

export interface CustomAxiosStatic {
  create: typeof create;
  defaults: AxiosDefaults;
  interceptors: { request: InterceptorManager; response: InterceptorManager };
  get: AxiosInstance['get'];
  post: AxiosInstance['post'];
  patch: AxiosInstance['patch'];
  delete: AxiosInstance['delete'];
}

interface AxiosDefaults {
  headers: { common: Record<string, string> };
  baseURL?: string;
}

const globalDefaults: AxiosDefaults = {
  headers: { common: {} },
  baseURL: '',
};

const globalInterceptors = {
  request: new InterceptorManager(),
  response: new InterceptorManager(),
};

export function create(config: { baseURL?: string; withCredentials?: boolean } = {}): AxiosInstance {
  const baseURL = config.baseURL || '';
  const defaultWithCreds = !!config.withCredentials;

  const instance: AxiosInstance = {
    interceptors: { request: new InterceptorManager(), response: new InterceptorManager() },
    async get<T = any>(url: string, init: { params?: Record<string, any> } & RequestConfig = {} as any) {
      const params = (init as any).params
        ? '?' + new URLSearchParams((init as any).params).toString()
        : '';
      const opts = { ...init } as RequestConfig;
      delete (opts as any).params;
      return request<T>(baseURL + url + params, 'GET', opts);
    },
    async post<T = any>(url: string, data: any = {}, init: RequestConfig = {}) {
      const headers = {
        'Content-Type': 'application/json',
        ...(init as any).headers,
      };
      const opts = { ...init, body: JSON.stringify(data), headers } as RequestConfig;
      return request<T>(baseURL + url, 'POST', opts);
    },
    async patch<T = any>(url: string, data: any = {}, init: RequestConfig = {}) {
      const headers = {
        'Content-Type': 'application/json',
        ...(init as any).headers,
      };
      const opts = { ...init, body: JSON.stringify(data), headers } as RequestConfig;
      return request<T>(baseURL + url, 'PATCH', opts);
    },
    async delete<T = any>(url: string, init: RequestConfig = {} as any) {
      return request<T>(baseURL + url, 'DELETE', init);
    },
  };

  // Include global interceptors on the instance
  instance.interceptors.request.handlers.push(
    ...globalInterceptors.request.handlers
  );
  instance.interceptors.response.handlers.push(
    ...globalInterceptors.response.handlers
  );

  async function request<T>(url: string, method: string, init: RequestConfig): Promise<AxiosResponse<T>> {
    let reqInit: RequestConfig = { ...init };
    // Run request interceptors
    for (const h of instance.interceptors.request.handlers) {
      if (h) { // Added null check for h
        try {
          if (h.fulfilled) {
            const res = await h.fulfilled(reqInit);
            if (res) reqInit = res;
          }
        } catch (err) {
          if (h.rejected) { // h is not null here
            await h.rejected(err);
          }
        }
      }
    }

    // Read authToken from cookies
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {} as Record<string, string>);
    const authToken =
      cookies['authToken'] ||
      safeStorage.getItem('zion_token') ||
      safeStorage.getItem('token');

    const headers: Record<string, string> = { ...globalDefaults.headers.common };
    if (reqInit.headers) {
      if (reqInit.headers instanceof Headers) {
        (reqInit.headers as Headers).forEach((value, key) => headers[key] = value);
      } else if (Array.isArray(reqInit.headers)) { // string[][]
        for (const [key, value] of (reqInit.headers as string[][])) {
          headers[key] = value;
        }
      } else { // Record<string, string>
        Object.assign(headers, reqInit.headers as Record<string, string>);
      }
    }
    if (authToken) {
      headers['Authorization'] = `Bearer ${authToken}`;
    }

    const withCreds = reqInit.withCredentials ?? defaultWithCreds;
    delete reqInit.withCredentials;

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
        if (h && h.fulfilled) { // Added null check for h
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
        if (h && h.rejected) { // Added null check for h
          await h.rejected(err);
        }
      }
      throw err;
    }
  }

  return instance;
}

const defaultInstance = create();

const customAxios: CustomAxiosStatic = {
  create,
  defaults: globalDefaults,
  interceptors: globalInterceptors,
  get: defaultInstance.get,
  post: defaultInstance.post,
  patch: defaultInstance.patch,
  delete: defaultInstance.delete,
};

export default customAxios;
