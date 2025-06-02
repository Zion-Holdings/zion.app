export interface AxiosErrorData {
  message?: string;
  // Add other common error properties if known
  [key: string]: unknown;
}

export interface AxiosError extends Error {
  response?: { status: number; data?: AxiosErrorData | unknown }; // data changed from any
}

// V for value/response type of fulfilled, R for return type of fulfilled
// E for error type of rejected
type FulfilledFn<V = unknown, R = unknown> = (value: V) => R | Promise<R>;
type RejectedFn<E = unknown> = (error: E) => unknown | Promise<unknown>; // Return of rejected can be anything or throw

class InterceptorManager<V_FULFILL = unknown, R_FULFILL = unknown, E_REJECT = unknown> {
  handlers: { fulfilled?: FulfilledFn<V_FULFILL, R_FULFILL>; rejected?: RejectedFn<E_REJECT> }[] = [];

  use(fulfilled?: FulfilledFn<V_FULFILL, R_FULFILL>, rejected?: RejectedFn<E_REJECT>) {
    this.handlers.push({ fulfilled, rejected });
  }
}

// T for response data type, D for request data type (for POST)
export interface AxiosInstance {
  interceptors: { 
    response: InterceptorManager<{ data: unknown; status: number }, { data: unknown; status: number }, AxiosError> 
  };
  get<T = unknown>(url: string, config?: { params?: Record<string, string | number | boolean | undefined> } & Omit<RequestInit, 'body' | 'method'>): Promise<T>;
  post<T = unknown, D = unknown>(url: string, data?: D, config?: Omit<RequestInit, 'body' | 'method'>): Promise<T>;
  // Add other methods like delete, put, patch as needed with generics
}

interface AxiosDefaults {
  headers: { common: Record<string, string> };
}

const globalDefaults: AxiosDefaults = {
  headers: { common: {} },
};

const globalInterceptors = {
  response: new InterceptorManager<{ data: unknown; status: number }, { data: unknown; status: number }, AxiosError>(),
};

export function create(config: { baseURL?: string; withCredentials?: boolean } = {}): AxiosInstance {
  const baseURL = config.baseURL || '';
  const withCreds = !!config.withCredentials;

  const instance: AxiosInstance = {
    interceptors: { 
      response: new InterceptorManager<{ data: unknown; status: number }, { data: unknown; status: number }, AxiosError>() 
    },
    async get<T = unknown>(url: string, init: { params?: Record<string, string | number | boolean | undefined> } & Omit<RequestInit, 'body' | 'method'> = {}) {
      const params = init.params
        ? '?' + new URLSearchParams(init.params as Record<string, string>).toString() // URLSearchParams expects string values
        : '';
      const opts = { ...init } as RequestInit;
      delete (opts as { params?: unknown }).params; // Still need to delete the custom 'params'
      // Assuming request function is adapted to return T
      return request<T>(baseURL + url + params, 'GET', opts);
    },
    async post<T = unknown, D = unknown>(url: string, data?: D, init: Omit<RequestInit, 'body' | 'method'> = {}) {
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...(init as { headers?: HeadersInit }).headers,
      };
      const opts: RequestInit = { 
        ...init, 
        body: data !== undefined ? JSON.stringify(data) : undefined, 
        headers 
      };
      // Assuming request function is adapted to return T
      return request<T>(baseURL + url, 'POST', opts);
    },
  };

  instance.interceptors.response.handlers.push(...globalInterceptors.response.handlers);

  async function request<T = unknown>(url: string, method: string, init: RequestInit): Promise<T> {
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {} as Record<string, string>);
    const authToken = cookies['authToken'] || localStorage.getItem('token');

    const headers: HeadersInit = { ...globalDefaults.headers.common, ...init.headers };
    if (authToken) {
      (headers as Record<string, string>)['Authorization'] = `Bearer ${authToken}`;
    }

    const response = await fetch(url, { ...init, method, headers, credentials: withCreds ? 'include' : init.credentials });
    
    let responseData: unknown = null;
    try {
      // Try to parse JSON, but don't fail if it's not JSON or empty
      const text = await response.text();
      if (text) {
          responseData = JSON.parse(text);
      }
    } catch (e) {
        // console.warn("Failed to parse response JSON or response was empty", e);
    }

    // This is the object passed to interceptors
    let resultForInterceptor: { data: unknown; status: number } = { data: responseData, status: response.status };

    if (response.ok) {
      for (const h of instance.interceptors.response.handlers) {
        if (h.fulfilled) {
          // The fulfilled interceptor can transform the result
          resultForInterceptor = await h.fulfilled(resultForInterceptor);
        }
      }
      return resultForInterceptor.data as T; // Assume data is now of type T after interceptors
    } else {
      const error: AxiosError = Object.assign(
        new Error(response.statusText || 'Request failed'), 
        { response: { data: responseData, status: response.status } }
      );
      
      // Allow interceptors to handle/transform the error
      for (const h of instance.interceptors.response.handlers) {
        if (h.rejected) {
          // If h.rejected throws, it will propagate and skip subsequent handlers.
          // If it returns a value, that value is ignored, and the original error is thrown.
          // If it transforms the error and wishes to propagate a new error, it must throw it.
          await h.rejected(error); 
        }
      }
      throw error; // Original error (or one modified by an interceptor if it re-assigned properties on 'error')
    }
  }

  return instance;
}

const axios = {
  create,
  defaults: globalDefaults,
  interceptors: globalInterceptors,
};

export default axios;
