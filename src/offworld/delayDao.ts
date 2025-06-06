import { saveJSON } from './ipfs';
import { getLog } from './orbitdb';

export interface Proposal {
  id: string;
  description: string;
  created: number;
  expires: number;
  executed: boolean;
  forVotes: number;
  againstVotes: number;
}

export interface Vote {
  proposalId: string;
  voter: string;
  support: boolean;
}

export class DelayTolerantDAO {
  private proposals: Proposal[] = [];
  private votes: Vote[] = [];
  private ready = false;
  private logPromise: Promise<any> | null = null;

  async connect() {
    this.logPromise = getLog('dao-log');
    this.ready = true;
    await this.flushQueues();
  }

  async submitProposal(description: string, ttlMs = 5 * 24 * 60 * 60 * 1000): Promise<Proposal> {
    const now = Date.now();
    const proposal: Proposal = {
      id: crypto.randomUUID(),
      description,
      created: now,
      expires: now + ttlMs,
      executed: false,
      forVotes: 0,
      againstVotes: 0,
    };
    if (this.ready) {
      await this.saveProposal(proposal);
    } else {
      this.proposals.push(proposal);
    }
    return proposal;
  }

  async submitVote(vote: Vote) {
    if (this.ready) {
      await this.saveVote(vote);
    } else {
      this.votes.push(vote);
    }
  }

  private async flushQueues() {
    for (const p of this.proposals) await this.saveProposal(p);
    this.proposals = [];
    for (const v of this.votes) await this.saveVote(v);
    this.votes = [];
  }

  private async saveProposal(proposal: Proposal) {
    const cid = await saveJSON(proposal);
    const log = await this.logPromise!;
    await log.add({ type: 'proposal', cid, id: proposal.id });
  }

  private async saveVote(vote: Vote) {
    const cid = await saveJSON(vote);
    const log = await this.logPromise!;
    await log.add({ type: 'vote', cid, proposalId: vote.proposalId, voter: vote.voter, support: vote.support });
  }
}
