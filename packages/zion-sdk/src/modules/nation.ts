import { HttpClient } from '../http';

export class NationModule {
  constructor(private http: HttpClient) {}

  deployModule(input: { name: string; config: Record<string, any> }) {
    return this.http.request<{ id: string; status: 'deploying' | 'deployed' }>('POST', '/nation/modules', { body: input });
  }

  getModule(id: string) {
    return this.http.request<{ id: string; name: string; status: string; config: Record<string, any> }>('GET', `/nation/modules/${id}`);
  }
}