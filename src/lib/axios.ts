export interface AxiosResponse<T = any> {
  status: number;
  data: T;
}

export interface AxiosRequestConfig {
  baseURL?: string;
  headers?: Record<string, string>;
}

interface Interceptor {
  use(handler: (config: AxiosRequestConfig) => AxiosRequestConfig): void;
  handlers: Array<(config: AxiosRequestConfig) => AxiosRequestConfig>;
}

function createRequestInterceptor(): Interceptor {
  const interceptor: Interceptor = {
    handlers: [],
    use(handler) {
      this.handlers.push(handler);
    },
  };
  return interceptor;
}

export interface AxiosInstance {
  defaults: { headers: { common: Record<string, string> } };
  interceptors: { request: Interceptor };
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}

export const axios = {
  create(config: AxiosRequestConfig = {}): AxiosInstance {
    const defaultsHeaders: Record<string, string> = {};
    const requestInterceptor = createRequestInterceptor();
    const instance: AxiosInstance = {
      defaults: { headers: { common: defaultsHeaders } },
      interceptors: { request: requestInterceptor },
      async post(url, data, reqConfig = {}) {
        let finalConfig: AxiosRequestConfig = { ...config, ...reqConfig };
        for (const handler of requestInterceptor.handlers) {
          finalConfig = handler(finalConfig) || finalConfig;
        }
        const headers = {
          'Content-Type': 'application/json',
          ...finalConfig.headers,
          ...defaultsHeaders,
        };
        const res = await fetch(`${finalConfig.baseURL || ''}${url}`, {
          method: 'POST',
          headers,
          body: JSON.stringify(data ?? {}),
        });
        const responseData = await res.json().catch(() => ({}));
        return { status: res.status, data: responseData };
      },
    };
    return instance;
  },
};

export default axios;
