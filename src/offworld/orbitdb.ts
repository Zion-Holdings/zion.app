/// <reference types="../types/orbitdb__core.d.ts" />

// Conditional imports to prevent native module loading during CI/build
let createOrbitDB: any;
let createHelia: any;
let createLibp2p: any;
let gossipsub: any;
let identify: any;
let tcp: any;
let noise: any;
let yamux: any;
let MemoryBlockstore: any;
let MemoryDatastore: any;

// Check if we're in a build environment
const isBuildEnv = process.env.CI === 'true' || process.env.NODE_ENV === 'production' && typeof window === 'undefined';

if (isBuildEnv) {
  console.log('🚫 OrbitDB/LibP2P disabled for CI/build environment');
  
  // Provide mock implementations
  createOrbitDB = () => Promise.resolve({
    open: () => Promise.resolve({
      add: () => Promise.resolve(),
      iterator: () => [],
      close: () => Promise.resolve()
    }),
    close: () => Promise.resolve()
  });
  
  createHelia = () => Promise.resolve({
    stop: () => Promise.resolve(),
    libp2p: { peerId: { toString: () => 'mock-peer-id' } }
  });
  
  createLibp2p = () => Promise.resolve({
    peerId: { toString: () => 'mock-peer-id' },
    getMultiaddrs: () => [],
    addEventListener: () => {},
    stop: () => Promise.resolve()
  });
  
  // Mock all other imports as no-ops
  gossipsub = () => ({});
  identify = () => ({});
  tcp = () => ({});
  noise = () => ({});
  yamux = () => ({});
  MemoryBlockstore = class {};
  MemoryDatastore = class {};
} else {
  try {
    // Dynamic imports for production environment
    const orbitdbCore = require('@orbitdb/core');
    createOrbitDB = orbitdbCore.createOrbitDB;
    
    const helia = require('helia');
    createHelia = helia.createHelia;
    
    const libp2p = require('libp2p');
    createLibp2p = libp2p.createLibp2p;
    
    const libp2pGossipsub = require('@chainsafe/libp2p-gossipsub');
    gossipsub = libp2pGossipsub.gossipsub;
    
    const libp2pIdentify = require('@libp2p/identify');
    identify = libp2pIdentify.identify;
    
    const libp2pTcp = require('@libp2p/tcp');
    tcp = libp2pTcp.tcp;
    
    const libp2pNoise = require('@chainsafe/libp2p-noise');
    noise = libp2pNoise.noise;
    
    const libp2pYamux = require('@chainsafe/libp2p-yamux');
    yamux = libp2pYamux.yamux;
    
    const blockstoreCore = require('blockstore-core');
    MemoryBlockstore = blockstoreCore.MemoryBlockstore;
    
    const datastoreCore = require('datastore-core');
    MemoryDatastore = datastoreCore.MemoryDatastore;
  } catch (error: any) {
    console.warn('⚠️ Failed to load native libp2p modules, using mocks:', error.message);
    
    // Fallback to mocks if native modules fail to load
    createOrbitDB = () => Promise.resolve({
      open: () => Promise.resolve({
        add: () => Promise.resolve(),
        iterator: () => [],
        close: () => Promise.resolve()
      }),
      close: () => Promise.resolve()
    });
    
    createHelia = () => Promise.resolve({
      stop: () => Promise.resolve(),
      libp2p: { peerId: { toString: () => 'mock-peer-id' } }
    });
    
    createLibp2p = () => Promise.resolve({
      peerId: { toString: () => 'mock-peer-id' },
      getMultiaddrs: () => [],
      addEventListener: () => {},
      stop: () => Promise.resolve()
    });
    
    gossipsub = () => ({});
    identify = () => ({});
    tcp = () => ({});
    noise = () => ({});
    yamux = () => ({});
    MemoryBlockstore = class {};
    MemoryDatastore = class {};
  }
}

import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

// Types for OrbitDB and its stores might be needed from @orbitdb/core if used directly
// import { LogStore } from '@orbitdb/core';

let orbit: any = null; // Using 'any' for now, replace with OrbitDB type from @orbitdb/core if available
let heliaNode: any | null = null;
let libp2pNode: any | null = null; // Using 'any' for identify service, replace with proper type

const libp2pOptions = {
  transports: [tcp()],
  connectionEncryption: [noise()],
  streamMuxers: [yamux()],
  services: {
    identify: identify(),
    pubsub: gossipsub({
      allowPublishToZeroTopicPeers: true, // Necessary for single peer setup / testing
    }),
  },
  datastore: new MemoryDatastore(), // Ephemeral datastore for libp2p
};

export async function initOrbit(repoPath = './orbitdb-helia') {
  if (orbit) {
    logInfo('OrbitDB already initialized.');
    return;
  }

  try {
    logInfo('Initializing Libp2p...');
    libp2pNode = await createLibp2p(libp2pOptions);
    logInfo('Libp2p Initialized. PeerID:', { data: libp2pNode.peerId.toString() });

    // Log listening addresses
    libp2pNode.getMultiaddrs().forEach((addr: any) => {
      logInfo('Listening on:', { data: addr.toString() });
    });

    // Listen for new connections
    libp2pNode.addEventListener('peer:connect', (evt: any) => {
      logInfo('Peer connected:', { data: evt.detail.toString() });
    });

    logInfo('Initializing Helia...');
    const blockstore = new MemoryBlockstore(); // Ephemeral blockstore for Helia
    heliaNode = await createHelia({
      libp2p: libp2pNode,
      blockstore: blockstore, // Use an appropriate blockstore
      datastore: new MemoryDatastore(), // Helia also needs a datastore
    });
    logInfo('Helia Initialized.');

    logInfo('Creating OrbitDB instance...');
    // OrbitDB constructor might take Helia instance directly as 'ipfs'
    // The id option can be used to give a specific identity to this OrbitDB instance
    orbit = await createOrbitDB({ ipfs: heliaNode, directory: repoPath });
    logInfo('OrbitDB instance created. OrbitDB ID:', { data: orbit.id });
  } catch (error) {
    logErrorToProduction('Error initializing OrbitDB:', { data: error });
    throw error;
  }
}

export async function getLog(name: string): Promise<any> { // Replace 'any' with specific OrbitDB LogStore type
  if (!orbit) {
    logInfo('OrbitDB not initialized. Initializing now...');
    await initOrbit();
  }
  if (!orbit) {
    throw new Error('OrbitDB initialization failed.');
  }
  logInfo(`Opening log store: ${name}`);
  // Types for store options might be needed
  return orbit.log(name, { /* options if any, e.g., accessController */ });
}

export async function stopOrbit() {
  logInfo('Stopping OrbitDB...');
  if (orbit) {
    await orbit.stop();
    orbit = null;
    logInfo('OrbitDB stopped.');
  }
  if (heliaNode) {
    await heliaNode.stop();
    heliaNode = null;
    logInfo('Helia stopped.');
  }
  if (libp2pNode) {
    await libp2pNode.stop();
    libp2pNode = null;
    logInfo('Libp2p stopped.');
  }
}

// Example of how to ensure cleanup on exit, if this is a long-running process
// process.on('SIGINT', async () => {
//   await stopOrbit();
//   process.exit();
// });
