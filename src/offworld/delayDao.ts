// Dynamic imports to prevent native module loading during CI/build
// import { saveJSON } from './ipfs';
// import { getLog } from './orbitdb';

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

// Check if we're in a build environment
const isBuildEnv = process.env.CI === 'true' || process.env.NODE_ENV === 'production' && typeof window === 'undefined';

export class DelayTolerantDAO {
  private proposals: Proposal[] = [];
  private votes: Vote[] = [];
  private ready = false;
  private logPromise: Promise<any> | null = null;
  private ipfsModule: any = null;
  private orbitdbModule: any = null;

  async connect() {
    if (isBuildEnv) {
      console.log('🚫 DelayTolerantDAO: Native modules disabled for CI/build environment');
      this.ready = true;
      return;
    }

    try {
      // Dynamic imports only when not in CI/build environment
      const [ipfs, orbitdb] = await Promise.all([
        import('./ipfs'),
        import('./orbitdb')
      ]);
      
      this.ipfsModule = ipfs;
      this.orbitdbModule = orbitdb;
      
      this.logPromise = this.orbitdbModule.getLog('dao-log');
      this.ready = true;
      await this.flushQueues();
    } catch (error: any) {
      console.warn('⚠️ Failed to load native modules for DelayTolerantDAO:', error.message);
      this.ready = true; // Continue with mock functionality
    }
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
    if (this.ready && !isBuildEnv) {
      await this.saveProposal(proposal);
    } else {
      this.proposals.push(proposal);
    }
    return proposal;
  }

  async submitVote(vote: Vote) {
    if (this.ready && !isBuildEnv) {
      await this.saveVote(vote);
    } else {
      this.votes.push(vote);
    }
  }

  private async flushQueues() {
    if (isBuildEnv) return;
    
    for (const p of this.proposals) await this.saveProposal(p);
    this.proposals = [];
    for (const v of this.votes) await this.saveVote(v);
    this.votes = [];
  }

  private async saveProposal(proposal: Proposal) {
    if (isBuildEnv || !this.ipfsModule) return;
    
    try {
      const cid = await this.ipfsModule.saveJSON(proposal);
      const log = await this.logPromise!;
      await log.add({ type: 'proposal', cid, id: proposal.id });
    } catch (error: any) {
      console.warn('⚠️ Failed to save proposal:', error.message);
    }
  }

  private async saveVote(vote: Vote) {
    if (isBuildEnv || !this.orbitdbModule) return;
    
    try {
      const cid = await this.ipfsModule.saveJSON(vote);
      const log = await this.logPromise!;
      await log.add({ type: 'vote', cid, proposalId: vote.proposalId, voter: vote.voter, support: vote.support });
    } catch (error: any) {
      console.warn('⚠️ Failed to save vote:', error.message);
    }
  }
}
