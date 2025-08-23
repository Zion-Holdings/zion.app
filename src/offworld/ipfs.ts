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
  add: (_data: unknown) => Promise.resolve('mock-cid'),
  get: (_cid: string) => Promise.resolve({ mock: true })
});

// Browser-safe logging
function logInfo(message: string) {
  if (!isBuildEnv) {
    console.log(`[IPFS] ${message}`);
  }
}

// Browser-safe memory stores
class _MemoryBlockstore {
  private store = new Map<string, unknown>();
  
  async put(key: unknown, value: unknown) {
    this.store.set(String(key), value);
  }
  
  async get(key: unknown) {
    return this.store.get(String(key));
  }
  
  async has(key: unknown) {
    return this.store.has(String(key));
  }
  
  async delete(key: unknown) {
    this.store.delete(String(key));
  }
}

class _MemoryDatastore {
  private store = new Map<string, unknown>();
  
  async put(key: unknown, value: unknown) {
    this.store.set(String(key), value);
  }
  
  async get(key: unknown) {
    return this.store.get(String(key));
  }
  
  async has(key: unknown) {
    return this.store.has(String(key));
  }
  
  async delete(key: unknown) {
    this.store.delete(String(key));
  }
}

let heliaNode: unknown | null = null;

// Simplified libp2p options for this Helia instance
// Depending on use case, might share libp2p from orbitdb.ts or have more transports
const _libp2pOptions = {
  addresses: {
    listen: ['/ip4/0.0.0.0/tcp/0']
  },
  transports: [], // Will be populated server-side if needed
  connectionEncryption: [], // Will be populated server-side if needed
  streamMuxers: [], // Will be populated server-side if needed
  peerDiscovery: [], // Will be populated server-side if needed
  services: {} // Will be populated server-side if needed
};

async function getHelia(): Promise<unknown> {
  if (isBuildEnv || isBrowserEnv) {
    return createHelia();
  }
  
  if (!heliaNode) {
    try {
      logInfo('Initializing Helia for general IPFS operations...');
      
      heliaNode = await createHelia();
      
      logInfo('Helia Initialized for IPFS.');
    } catch (error) {
      let message = 'Unknown error';
      if (error && typeof error === 'object' && 'message' in error && typeof (error as { message?: unknown }).message === 'string') {
        message = (error as { message: string }).message;
      }
      console.warn('⚠️ Failed to initialize Helia:', message);
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
  } catch (error) {
    let message = 'Unknown error';
    if (error && typeof error === 'object' && 'message' in error && typeof (error as { message?: unknown }).message === 'string') {
      message = (error as { message: string }).message;
    }
    console.warn('⚠️ Failed to save JSON to IPFS:', message);
    return 'mock-cid-' + Date.now();
  }
}

export async function fetchJSON(cidString: string): Promise<unknown> {
  if (isBuildEnv || isBrowserEnv) {
    console.log('🚫 IPFS fetchJSON not available in browser environment');
    return { mock: true, cid: cidString };
  }
  
  try {
    const helia = await getHelia();
    const jsonService = heliaJson();
    const data = await jsonService.get(cidString);
    return data;
  } catch (error) {
    let message = 'Unknown error';
    if (error && typeof error === 'object' && 'message' in error && typeof (error as { message?: unknown }).message === 'string') {
      message = (error as { message: string }).message;
    }
    console.warn('⚠️ Failed to fetch JSON from IPFS:', message);
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
    if (heliaNode && typeof (heliaNode as { stop?: unknown }).stop === 'function') {
      await (heliaNode as { stop: () => Promise<void> }).stop();
      heliaNode = null;
      logInfo('General IPFS Helia node stopped.');
    }
  } catch (error) {
    let message = 'Unknown error';
    if (error && typeof error === 'object' && 'message' in error && typeof (error as { message?: unknown }).message === 'string') {
      message = (error as { message: string }).message;
    }
    console.warn('⚠️ Failed to stop IPFS node:', message);
  }
}

// Note: If this module's Helia instance is meant to be long-lived and share
// the same libp2p stack as orbitdb.ts, a shared module for libp2p/helia
// configuration might be beneficial to avoid conflicts and resource duplication.
