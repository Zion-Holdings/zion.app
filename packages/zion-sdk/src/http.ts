export interface ZionClientConfig {
  baseUrl: string;
  apiKey?: string;
  authToken?: string;
  fetchImpl?: typeof fetch;
}

export class HttpClient {
  private baseUrl: string;
  private apiKey?: string;
  private authToken?: string;
  private fetchImpl: typeof fetch;

  constructor(config: ZionClientConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, '');
    this.apiKey = config.apiKey;
    this.authToken = config.authToken;
    this.fetchImpl = config.fetchImpl ?? (globalThis.fetch as typeof fetch);
    if (!this.fetchImpl) throw new Error('fetch is not available. Provide fetchImpl in config.');
  }

  setAuthToken(token?: string) {
    this.authToken = token;
  }

  async request<T>(method: string, path: string, options: { body?: any; query?: Record<string, any>; headers?: Record<string, string> } = {}): Promise<T> {
    const url = new URL(this.baseUrl + (path.startsWith('/') ? path : `/${path}`));
    if (options.query) {
      for (const [key, value] of Object.entries(options.query)) {
        if (value === undefined || value === null) continue;
        url.searchParams.set(key, String(value));
      }
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    };

    if (this.apiKey) headers['x-api-key'] = this.apiKey;
    if (this.authToken) headers['Authorization'] = `Bearer ${this.authToken}`;

    const res = await this.fetchImpl(url.toString(), {
      method,
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`HTTP ${res.status} ${res.statusText}: ${text}`);
    }

    if (res.status === 204) return undefined as unknown as T;

    return (await res.json()) as T;
  }
}