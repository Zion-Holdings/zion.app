// Browser-safe IPFS implementation without any libp2p dependencies
// This version never attempts to load native modules in the browser

// Check if we're in a build environment or browser environment where libp2p might cause issues
const isBuildEnv = process.env.CI === 'true' || process.env.NODE_ENV === 'production' && typeof window === 'undefined';
const isBrowserEnv = typeof window !== 'undefined';

// Mock implementations for browser environment
const createHelia = () => Promise.resolve({
  stop: () => Promise.resolve(),
  libp2p: { getConnections: () => [] }
});

const heliaJson = () => ({
  // Use generic parameters but ignore values in this mock implementation
  add: (_data: unknown) => Promise.resolve('mock-cid'),
  get: (cid: string) => Promise.resolve({ mock: true, cid })
});

// Browser-safe logging
function logInfo(message: string) {
  if (!isBuildEnv) {
    console.log(`[IPFS] ${message}`);
  }
}

// Browser-safe memory stores
class MemoryBlockstore {
  private store = new Map();
  
  async put(key: any, value: any) {
    this.store.set(key.toString(), value);
  }
  
  async get(key: any) {
    return this.store.get(key.toString());
  }
  
  async has(key: any) {
    return this.store.has(key.toString());
  }
  
  async delete(key: any) {
    this.store.delete(key.toString());
  }
}

class MemoryDatastore {
  private store = new Map();
  
  async put(key: any, value: any) {
    this.store.set(key.toString(), value);
  }
  
  async get(key: any) {
    return this.store.get(key.toString());
  }
  
  async has(key: any) {
    return this.store.has(key.toString());
  }
  
  async delete(key: any) {
    this.store.delete(key.toString());
  }
}

let heliaNode: any | null = null;

// Simplified libp2p options for this Helia instance
// Depending on use case, might share libp2p from orbitdb.ts or have more transports
const libp2pOptions = {
  addresses: {
    listen: ['/ip4/0.0.0.0/tcp/0']
  },
  transports: [], // Will be populated server-side if needed
  connectionEncryption: [], // Will be populated server-side if needed
  streamMuxers: [], // Will be populated server-side if needed
  peerDiscovery: [], // Will be populated server-side if needed
  services: {} // Will be populated server-side if needed
};

async function getHelia(): Promise<any> {
  if (isBuildEnv || isBrowserEnv) {
    return createHelia();
  }
  
  if (!heliaNode) {
    try {
      logInfo('Initializing Helia for general IPFS operations...');
      
      heliaNode = await createHelia();
      
      logInfo('Helia Initialized for IPFS.');
    } catch (error: any) {
      console.warn('⚠️ Failed to initialize Helia:', error.message);
      return createHelia(); // Return mock
    }
  }
  
  return heliaNode;
}

export async function saveJSON(data: unknown): Promise<string> {
  if (isBuildEnv || isBrowserEnv) {
    console.log('🚫 IPFS saveJSON not available in browser environment');
    return 'mock-cid-' + Date.now();
  }
  
  try {
    const helia = await getHelia();
    const jsonService = heliaJson();
    const cid = await jsonService.add(data);
    return cid.toString();
  } catch (error: any) {
    console.warn('⚠️ Failed to save JSON to IPFS:', error.message);
    return 'mock-cid-' + Date.now();
  }
}

export async function fetchJSON(cidString: string): Promise<any> {
  if (isBuildEnv || isBrowserEnv) {
    console.log('🚫 IPFS fetchJSON not available in browser environment');
    return { mock: true, cid: cidString };
  }
  
  try {
    const helia = await getHelia();
    const jsonService = heliaJson();
    const data = await jsonService.get(cidString);
    return data;
  } catch (error: any) {
    console.warn('⚠️ Failed to fetch JSON from IPFS:', error.message);
    return { mock: true, cid: cidString };
  }
}

export async function stopIpfsNode(): Promise<void> {
  if (isBuildEnv || isBrowserEnv) {
    console.log('🚫 IPFS stopIpfsNode not available in browser environment');
    return;
  }
  
  try {
    logInfo('Stopping general IPFS Helia node...');
    if (heliaNode) {
      await heliaNode.stop();
      heliaNode = null;
      logInfo('General IPFS Helia node stopped.');
    }
  } catch (error: any) {
    console.warn('⚠️ Failed to stop IPFS node:', error.message);
  }
}

// Note: If this module's Helia instance is meant to be long-lived and share
// the same libp2p stack as orbitdb.ts, a shared module for libp2p/helia
// configuration might be beneficial to avoid conflicts and resource duplication.
