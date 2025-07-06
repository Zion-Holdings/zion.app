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

    // Server-side only - but we'll use mocks for now to prevent any native module loading
    console.log('🚫 DelayTolerantDAO: Using mock implementation for server environment');
    this.ready = true;
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
    } else {
      // Server-side implementation - use mock for now
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
    } else {
      // Server-side implementation - use mock for now
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
