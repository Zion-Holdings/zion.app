// Conditional imports to prevent native module loading during CI/build
let createHelia: any;
let heliaJson: any;
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
  console.log('🚫 IPFS/Helia/LibP2P disabled for CI/build environment');
  
  // Provide mock implementations
  createHelia = () => Promise.resolve({
    stop: () => Promise.resolve(),
    libp2p: { peerId: { toString: () => 'mock-peer-id' } }
  });
  
  heliaJson = () => ({
    add: () => Promise.resolve('mock-cid'),
    get: () => Promise.resolve({}),
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
    const helia = require('helia');
    createHelia = helia.createHelia;
    
    const heliaJsonModule = require('@helia/json');
    heliaJson = heliaJsonModule.json;
    
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
    console.warn('⚠️ Failed to load native IPFS/libp2p modules, using mocks:', error.message);
    
    // Fallback to mocks if native modules fail to load
    createHelia = () => Promise.resolve({
      stop: () => Promise.resolve(),
      libp2p: { peerId: { toString: () => 'mock-peer-id' } }
    });
    
    heliaJson = () => ({
      add: () => Promise.resolve('mock-cid'),
      get: () => Promise.resolve({}),
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
import { CID } from 'multiformats/cid';

let heliaNode: any | null = null;
let libp2pNode: any | null = null; // Using 'any' for identify service

// Simplified libp2p options for this Helia instance
// Depending on use case, might share libp2p from orbitdb.ts or have more transports
const libp2pOptions = {
  transports: [tcp()],
  connectionEncryption: [noise()],
  streamMuxers: [yamux()],
  services: {
    identify: identify(),
    // pubsub: gossipsub({ allowPublishToZeroTopicPeers: true }), // Only if this node also uses pubsub
  },
  datastore: new MemoryDatastore(),
};

async function getHelia(): Promise<any> {
  if (!heliaNode) {
    logInfo('Initializing Libp2p for general IPFS operations...');
    libp2pNode = await createLibp2p(libp2pOptions);
    logInfo('Libp2p Initialized for IPFS. PeerID:', { data: libp2pNode.peerId.toString() });

    logInfo('Initializing Helia for general IPFS operations...');
    const blockstore = new MemoryBlockstore();
    heliaNode = await createHelia({
      libp2p: libp2pNode,
      blockstore,
      datastore: new MemoryDatastore(),
    });
    logInfo('Helia Initialized for IPFS.');
  }
  return heliaNode;
}

export async function saveJSON(data: unknown): Promise<string> {
  const helia = await getHelia();
  const jsonService = heliaJson(helia);
  const cid = await jsonService.add(data);
  return cid.toString();
}

export async function fetchJSON(cidString: string): Promise<any> {
  const helia = await getHelia();
  const jsonService = heliaJson(helia);

  let parsedCid: any;
  try {
    parsedCid = CID.parse(cidString);
  } catch (error) {
    logErrorToProduction('Failed to parse CID string:', { data: error });
    throw new Error(`Invalid CID string: ${cidString}`);
  }

  const data = await jsonService.get(parsedCid);
  if (data === undefined) {
    throw new Error(`Data not found for CID: ${cidString}`);
  }
  return data;
}

export async function stopIpfsNode() {
  logInfo('Stopping general IPFS Helia node...');
  if (heliaNode) {
    await heliaNode.stop();
    heliaNode = null;
    logInfo('General IPFS Helia node stopped.');
  }
  if (libp2pNode) {
    await libp2pNode.stop();
    libp2pNode = null;
    logInfo('Libp2p for general IPFS node stopped.');
  }
}

// Note: If this module's Helia instance is meant to be long-lived and share
// the same libp2p stack as orbitdb.ts, a shared module for libp2p/helia
// initialization would be better. For now, this creates a separate stack.
