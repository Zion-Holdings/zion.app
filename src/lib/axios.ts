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
  post(url: string, data?: any, config?: RequestInit): Promise<any>;
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
      const opts = { ...init } as RequestInit & { _originalData?: any };
      delete (opts as any).params;
      // For GET, _originalData is not applicable, but we ensure consistent shape for init in request function
      return request(baseURL + url + params, 'GET', opts);
    },
    async post(url, data = {}, init = {}) {
      const headers = {
        'Content-Type': 'application/json',
        ...(init as any).headers,
      };
      // Add _originalData for retry purposes
      const opts = { ...init, body: JSON.stringify(data), headers, _originalData: data } as RequestInit & { _originalData?: any };
      return request(baseURL + url, 'POST', opts);
    },
    // Add put and delete for completeness, including _originalData for put
    async put(url, data = {}, init = {}) { // Assuming similar structure to post
      const headers = {
        'Content-Type': 'application/json',
        ...(init as any).headers,
      };
      const opts = { ...init, body: JSON.stringify(data), headers, _originalData: data } as RequestInit & { _originalData?: any };
      return request(baseURL + url, 'PUT', opts);
    },
    async delete(url, init = {}) { // Assuming similar structure to get
      const opts = { ...init } as RequestInit & { _originalData?: any };
      return request(baseURL + url, 'DELETE', opts);
    }
  };

  async function request(url: string, method: string, init: RequestInit & { _originalData?: any }) {
    // Read authToken from cookies
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {} as Record<string, string>);
    const authToken = cookies['authToken'];

    const finalHeaders = { ...init.headers }; // Start with headers from init
    if (authToken) {
      finalHeaders['Authorization'] = `Bearer ${authToken}`;
    }

    document.dispatchEvent(new CustomEvent('globalLoading', { detail: { isLoading: true } }));

    try {
      const response = await fetch(url, { ...init, method, headers: finalHeaders, credentials: withCreds ? 'include' : init.credentials });
      let responseData: any = null;
      try {
        responseData = await response.clone().json();
      } catch {}

      const result = { data: responseData, status: response.status, headers: response.headers };

      if (response.ok) {
        document.dispatchEvent(new CustomEvent('globalLoading', { detail: { isLoading: false } }));
        let res: any = result;
        for (const handler of instance.interceptors.response.handlers) {
          if (handler.fulfilled) {
            res = await handler.fulfilled(res);
          }
        }
        return res;
      } else {
        // Error case, will be caught by the global error interceptor after this.
        // The interceptor will set isLoading to false.
        const error: any = Object.assign(
          new Error(responseData?.message || responseData?.error || 'Request failed'),
          {
            response: result,
            config: {
              url: url,
              method: method,
              data: init._originalData,
              headers: init.headers
            }
          }
        );
        throw error; // This throw will be caught by the instance.interceptors.response.use
      }
    } catch (networkOrThrownError: any) {
      // This catches fetch network errors (e.g., no connection)
      // OR errors deliberately thrown from the 'else' block above.

      // If it's NOT an error we've already augmented (i.e., it's a raw network error from fetch)
      if (!networkOrThrownError.response && !networkOrThrownError.config) {
        // Only dispatch loading false here for raw network errors.
        // For errors thrown from 'else' (HTTP errors), the interceptor handles it.
        document.dispatchEvent(new CustomEvent('globalLoading', { detail: { isLoading: false } }));

        const constructedError: any = Object.assign(
          new Error(networkOrThrownError.message || 'Network request failed'),
          {
            response: null,
            config: {
              url: url,
              method: method,
              data: init._originalData,
              headers: init.headers
            }
          }
        );
        // Throwing is preferred to keep error handling centralized in interceptors.
        throw constructedError;
      }
      // If it's an error already thrown from the 'else' block (HTTP error) or already constructed,
      // it will be processed by the interceptors. isLoading is handled by the interceptor for these.
      throw networkOrThrownError;
    }
  }

  // Global Error Interceptor
  instance.interceptors.response.use(undefined, async (error: any) => {
    console.log("Global error interceptor caught (axios.ts):", error);

    // 1. Set Loading False via event
    document.dispatchEvent(new CustomEvent('globalLoading', { detail: { isLoading: false } }));

    // 2. Extract Message
    let displayMessage = "An unexpected error occurred. Please try again.";
    if (error.response?.data?.error) {
      displayMessage = error.response.data.error;
    } else if (error.response?.data?.message) {
      displayMessage = error.response.data.message;
    } else if (error.message) { // For network errors or errors without response.data
      displayMessage = error.message;
    }

    // Refine message for specific scenarios
    if (!error.response) { // True network error (fetch failed to connect or error constructed in catch)
      displayMessage = "Network error. Please check your connection and try again.";
    } else if (error.response?.status === 0 ) {
      displayMessage = "Network error. Please check your connection and try again.";
    } else if (error.response?.status === 503 && error.response?.data?.error?.includes('Network error. Please try again later.')) {
      displayMessage = error.response.data.error;
    } else if (error.response?.status === 500) {
        displayMessage = "A server error occurred. Please try again later.";
    } else if (error.response?.status === 401) {
        displayMessage = "Authentication failed. Please log in again.";
    } else if (error.response?.status === 403) {
        displayMessage = "You do not have permission to perform this action.";
    }
    // Add more specific status code messages if needed

    // 3. Show Error Modal via event
    document.dispatchEvent(new CustomEvent('globalError', {
      detail: { message: displayMessage, retryConfig: error.config }
    }));

    // 4. IMPORTANT: Rethrow the error so other handlers or the original caller can catch it.
    throw error;
  });

  return instance;
}

export default { create };
