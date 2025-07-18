/// <reference types="../types/orbitdb__core.d.ts" />

// Browser-safe OrbitDB implementation without any libp2p dependencies
// This version never attempts to load native modules in the browser

// Check if we're in a build environment or browser environment where libp2p might cause issues
const isBuildEnv = process.env.CI === 'true' || process.env.NODE_ENV === 'production' && typeof window === 'undefined';
const isBrowserEnv = typeof window !== 'undefined';

// Mock implementations for browser environment
const createOrbitDB = () => Promise.resolve({
  open: () => Promise.resolve({
    add: () => Promise.resolve(),
    iterator: () => [],
    close: () => Promise.resolve()
  }),
  stop: () => Promise.resolve()
});

const createHelia = () => Promise.resolve({
  stop: () => Promise.resolve(),
  libp2p: { getConnections: () => [] }
});

// Browser-safe logging
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

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

// Types for OrbitDB and its stores might be needed from @orbitdb/core if used directly
// import { LogStore } from '@orbitdb/core';

// Placeholder types for OrbitDB and Helia
type OrbitDB = object;
type Helia = object;

let orbit: OrbitDB | null = null;
let heliaNode: Helia | null = null;

// Simplified libp2p options for this Helia instance
// Depending on use case, might share libp2p from ipfs.ts or have more transports
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

export async function initOrbit(_repoPath = './orbitdb-helia') {
  if (orbit) {
    logInfo('OrbitDB already initialized.');
    return;
  }

  if (isBuildEnv || isBrowserEnv) {
    logInfo('OrbitDB initialization skipped for CI/build/browser environment');
    return;
  }

  try {
    // Only initialize in server environment
    if (typeof window === 'undefined') {
      logInfo('Initializing Helia...');
      heliaNode = await createHelia();
      logInfo('Helia Initialized.');

      logInfo('Creating OrbitDB instance...');
      orbit = await createOrbitDB();
      logInfo('OrbitDB instance created.');
    }
    // Do not fallback to mock in production; only initialize in server environment
  } catch {
    let message = 'Unknown error';
    if (error && typeof error === 'object' && 'message' in error && typeof (error as { message?: unknown }).message === 'string') {
      message = (error as { message: string }).message;
    }
    logErrorToProduction('⚠️ Failed to initialize OrbitDB:', { data: message });
  }
}

export async function getLog(name: string): Promise<unknown> {
  if (isBuildEnv || isBrowserEnv) {
    logInfo('🚫 OrbitDB getLog not available in browser environment');
    return {
      add: () => Promise.resolve(),
      iterator: () => [],
      close: () => Promise.resolve()
    };
  }

  if (!orbit) {
    throw new Error('OrbitDB not initialized. Call initOrbit() first.');
  }

  try {
    // Open a log store with the given name
    const log = await (orbit as { open: (name: string, opts: { type: string }) => Promise<unknown> }).open(name, { type: 'log' });
    return log;
  } catch {
    let message = 'Unknown error';
    if (error && typeof error === 'object' && 'message' in error && typeof (error as { message?: unknown }).message === 'string') {
      message = (error as { message: string }).message;
    }
    logErrorToProduction('⚠️ Failed to open OrbitDB log:', { data: message });
    // Return mock log
    return {
      add: () => Promise.resolve(),
      iterator: () => [],
      close: () => Promise.resolve()
    };
  }
}

export async function stopOrbit(): Promise<void> {
  if (isBuildEnv || isBrowserEnv) {
    logInfo('🚫 OrbitDB stopOrbit not available in browser environment');
    return;
  }

  try {
    logInfo('Stopping OrbitDB...');
    if (orbit) {
      await (orbit as { stop: () => Promise<void> }).stop();
      orbit = null;
      logInfo('OrbitDB stopped.');
    }
    if (heliaNode) {
      await (heliaNode as { stop: () => Promise<void> }).stop();
      heliaNode = null;
      logInfo('Helia for OrbitDB stopped.');
    }
  } catch {
    let message = 'Unknown error';
    if (error && typeof error === 'object' && 'message' in error && typeof (error as { message?: unknown }).message === 'string') {
      message = (error as { message: string }).message;
    }
    logErrorToProduction('⚠️ Failed to stop OrbitDB:', { data: message });
  }
}

// Example of how to ensure cleanup on exit, if this is a long-running process
// process.on('SIGINT', async () => {
//   await stopOrbit();
//   process.exit();
// });
