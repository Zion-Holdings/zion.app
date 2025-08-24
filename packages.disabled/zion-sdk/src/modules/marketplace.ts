import { HttpClient } from '../http';
import { Job, PaginationQuery, Quote, TalentProfile } from '../types';

export class MarketplaceModule {
  constructor(private http: HttpClient) {}

  listJobs(query: PaginationQuery = {}) {
    return this.http.request<Job[]>('GET', '/marketplace/jobs', { query });
  }

  getJob(jobId: string) {
    return this.http.request<Job>('GET', `/marketplace/jobs/${jobId}`);
  }

  listTalent(query: PaginationQuery = {}) {
    return this.http.request<TalentProfile[]>('GET', '/marketplace/talent', { query });
  }

  submitQuote(jobId: string, input: Omit<Quote, 'id' | 'createdAt'>) {
    return this.http.request<Quote>('POST', `/marketplace/jobs/${jobId}/quotes`, { body: input });
  }
}