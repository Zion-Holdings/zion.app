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
  interceptors: { response: InterceptorManager };
  get(url: string, config?: { params?: Record<string, any> } & RequestInit): Promise<any>;
}

export function create(config: { baseURL?: string; withCredentials?: boolean } = {}): AxiosInstance {
  const baseURL = config.baseURL || '';
  const withCreds = !!config.withCredentials;

  const instance: AxiosInstance = {
    interceptors: { response: new InterceptorManager() },
    async get(url, init = {}) {
      const params = (init as any).params
        ? '?' + new URLSearchParams((init as any).params).toString()
        : '';
      const opts = { ...init } as RequestInit;
      delete (opts as any).params;
      return request(baseURL + url + params, 'GET', opts);
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
      return res;
    } else {
      const err: AxiosError = Object.assign(new Error('Request failed'), { response: result });
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

export default { create };
