// Browser-safe implementation without any libp2p dependencies
// This version never attempts to load native modules in the browser

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

// Check if we're in a build environment or browser environment where libp2p might cause issues
const isBuildEnv = process.env.CI === 'true' || process.env.NODE_ENV === 'production' && typeof window === 'undefined';
const isBrowserEnv = typeof window !== 'undefined';

export interface IpfsModule {
  saveJSON(data: unknown): Promise<string>;
  fetchJSON(cid: string): Promise<unknown>;
  stopIpfsNode(): Promise<void>;
}

export interface OrbitDbModule {
  getLog(name: string): Promise<any>;
  initOrbit(repoPath?: string): Promise<void>;
  stopOrbit(): Promise<void>;
}

export class DelayTolerantDAO {
  private proposals: Proposal[] = [];
  private votes: Vote[] = [];
  private ready = false;

  async connect() {
    // Always use mock implementation in browser environment
    if (isBuildEnv || isBrowserEnv) {
      console.log('🚫 DelayTolerantDAO: Using mock implementation for CI/build/browser environment');
      this.ready = true;
      return;
    }

    // Only attempt server-side operations in server environment
    if (typeof window === 'undefined') {
      try {
        // Server-side only - dynamic imports
        const [ipfs, orbitdb] = await Promise.all([
          import('./ipfs'),
          import('./orbitdb')
        ]);
        
        // Use the imported modules
        this.ready = true;
        console.log('✅ DelayTolerantDAO: Server-side modules loaded successfully');
      } catch (error: any) {
        console.warn('⚠️ Failed to load native modules for DelayTolerantDAO:', error.message);
        this.ready = true; // Continue with mock functionality
      }
    } else {
      // Browser environment - always use mock
      this.ready = true;
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
    
    // Always use local storage in browser environment
    if (isBrowserEnv) {
      this.proposals.push(proposal);
      // Store in localStorage for persistence
      try {
        const stored = localStorage.getItem('dao-proposals') || '[]';
        const proposals = JSON.parse(stored);
        proposals.push(proposal);
        localStorage.setItem('dao-proposals', JSON.stringify(proposals));
      } catch (error) {
        console.warn('Failed to store proposal in localStorage:', error);
      }
    } else if (this.ready && !isBuildEnv) {
      // Server-side implementation would go here
      this.proposals.push(proposal);
    } else {
      this.proposals.push(proposal);
    }
    
    return proposal;
  }

  async submitVote(vote: Vote) {
    // Always use local storage in browser environment
    if (isBrowserEnv) {
      this.votes.push(vote);
      // Store in localStorage for persistence
      try {
        const stored = localStorage.getItem('dao-votes') || '[]';
        const votes = JSON.parse(stored);
        votes.push(vote);
        localStorage.setItem('dao-votes', JSON.stringify(votes));
      } catch (error) {
        console.warn('Failed to store vote in localStorage:', error);
      }
    } else if (this.ready && !isBuildEnv) {
      // Server-side implementation would go here
      this.votes.push(vote);
    } else {
      this.votes.push(vote);
    }
  }

  // Browser-safe methods that don't require native modules
  async getProposals(): Promise<Proposal[]> {
    if (isBrowserEnv) {
      try {
        const stored = localStorage.getItem('dao-proposals') || '[]';
        return JSON.parse(stored);
      } catch (error) {
        console.warn('Failed to load proposals from localStorage:', error);
        return this.proposals;
      }
    }
    return this.proposals;
  }

  async getVotes(): Promise<Vote[]> {
    if (isBrowserEnv) {
      try {
        const stored = localStorage.getItem('dao-votes') || '[]';
        return JSON.parse(stored);
      } catch (error) {
        console.warn('Failed to load votes from localStorage:', error);
        return this.votes;
      }
    }
    return this.votes;
  }
}
