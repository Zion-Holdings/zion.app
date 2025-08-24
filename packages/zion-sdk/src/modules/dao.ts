import { HttpClient } from '../http';
import { Proposal, Vote } from '../types';

export class DaoModule {
  constructor(private http: HttpClient) {}

  createProposal(input: Omit<Proposal, 'id' | 'status'>) {
    return this.http.request<Proposal>('POST', '/dao/proposals', { body: input });
  }

  getProposal(proposalId: string) {
    return this.http.request<Proposal>('GET', `/dao/proposals/${proposalId}`);
  }

  listProposals() {
    return this.http.request<Proposal[]>('GET', '/dao/proposals');
  }

  castVote(proposalId: string, vote: Omit<Vote, 'weight'> & { weight?: number }) {
    return this.http.request<{ success: boolean }>('POST', `/dao/proposals/${proposalId}/votes`, { body: vote });
  }

  tallyVotes(proposalId: string) {
    return this.http.request<{ for: number; against: number; abstain: number }>('GET', `/dao/proposals/${proposalId}/tally`);
  }
}