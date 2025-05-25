export interface AxiosRequestConfig {
  baseURL?: string;
  headers?: Record<string, string>;
}

export interface AxiosResponse<T = any> {
  status: number;
  data: T;
}

type RequestInterceptor = (config: AxiosRequestConfig) => AxiosRequestConfig;

class AxiosInstance {
  baseURL: string;
  headers: Record<string, string>;
  interceptors = {
    request: {
      handlers: [] as RequestInterceptor[],
      use: (fn: RequestInterceptor) => {
        this.interceptors.request.handlers.push(fn);
      },
    },
  };
  constructor(config: AxiosRequestConfig = {}) {
    this.baseURL = config.baseURL || '';
    this.headers = config.headers || {};
  }
  private applyInterceptors(config: AxiosRequestConfig) {
    return this.interceptors.request.handlers.reduce((c, fn) => fn(c), config);
  }
  async post<T = any>(url: string, data?: any): Promise<AxiosResponse<T>> {
    const config = this.applyInterceptors({ baseURL: this.baseURL, headers: { ...this.headers } });
    const res = await fetch(config.baseURL + url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...(config.headers || {}) },
      body: JSON.stringify(data),
    });
    let body: any = {};
    try {
      body = await res.json();
    } catch {}
    return { status: res.status, data: body };
  }
}

export function create(config: AxiosRequestConfig = {}) {
  return new AxiosInstance(config);
}

export default { create };
