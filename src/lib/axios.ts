export interface AxiosInstance {
  defaults: { baseURL?: string; headers: { common: Record<string, string> } };
  interceptors: { request: { use: (fn: (config: any) => any) => void } };
  post: (url: string, data: any) => Promise<{ status: number; data: any }>;
}

export interface AxiosConfig {
  baseURL?: string;
}

export function create(config: AxiosConfig = {}): AxiosInstance {
  let interceptor: ((config: any) => any) | null = null;

  const instance: AxiosInstance = {
    defaults: {
      baseURL: config.baseURL,
      headers: { common: {} }
    },
    interceptors: {
      request: {
        use(fn: (config: any) => any) {
          interceptor = fn;
        }
      }
    },
    async post(url: string, data: any) {
      let cfg: any = { url, data, headers: { ...instance.defaults.headers.common } };
      if (interceptor) cfg = interceptor(cfg) || cfg;
      return { status: 200, data: {} };
    }
  };
  return instance;
}

export default { create };
