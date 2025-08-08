import { HttpClient } from '../http';
import { Milestone, Proposal } from '../types';

export class ProposalEngineModule {
  constructor(private http: HttpClient) {}

  createProject(input: { title: string; description: string; milestones: Omit<Milestone, 'id' | 'status'>[] }) {
    return this.http.request<Proposal>('POST', '/proposals/projects', { body: input });
  }

  updateMilestoneStatus(projectId: string, milestoneId: string, status: Milestone['status']) {
    return this.http.request<Milestone>('PATCH', `/proposals/projects/${projectId}/milestones/${milestoneId}`, { body: { status } });
  }

  releaseMilestonePayout(projectId: string, milestoneId: string) {
    return this.http.request<{ success: boolean }>('POST', `/proposals/projects/${projectId}/milestones/${milestoneId}/payout`);
  }
}