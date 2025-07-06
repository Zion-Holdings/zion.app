// Browser-safe exports - only export delayDao, provide mocks for ipfs and orbitdb
export * from './delayDao';
// Do NOT export or re-export ipfs or orbitdb here!

// Mock implementations for browser environment
const isBrowserEnv = typeof window !== 'undefined';

if (isBrowserEnv) {
  // Export mock implementations for browser
  export const saveJSON = async (data: unknown): Promise<string> => {
    console.log('🚫 IPFS saveJSON not available in browser environment');
    return 'mock-cid-' + Date.now();
  };

  export const fetchJSON = async (cidString: string): Promise<any> => {
    console.log('🚫 IPFS fetchJSON not available in browser environment');
    return { mock: true, cid: cidString };
  };

  export const stopIpfsNode = async (): Promise<void> => {
    console.log('🚫 IPFS stopIpfsNode not available in browser environment');
  };

  export const initOrbit = async (repoPath?: string): Promise<void> => {
    console.log('🚫 OrbitDB initOrbit not available in browser environment');
  };

  export const getLog = async (name: string): Promise<any> => {
    console.log('🚫 OrbitDB getLog not available in browser environment');
    return {
      add: () => Promise.resolve(),
      iterator: () => [],
      close: () => Promise.resolve()
    };
  };

  export const stopOrbit = async (): Promise<void> => {
    console.log('🚫 OrbitDB stopOrbit not available in browser environment');
  };
} else {
  // Export real implementations for server environment
  export * from './ipfs';
  export * from './orbitdb';
}
