/// &lt;reference types="../types/orbitdb__core.d.ts" />
import { createOrbitDB } from '@orbitdb/core';
import { createHelia, Helia } from 'helia';
import { createLibp2p, Libp2p } from 'libp2p';
import { gossipsub } from '@chainsafe/libp2p-gossipsub';
import { identify } from '@libp2p/identify';
import { tcp } from '@libp2p/tcp';
import { noise } from '@chainsafe/libp2p-noise';
import { yamux } from '@chainsafe/libp2p-yamux';
import { MemoryBlockstore } from 'blockstore-core/memory';
import { MemoryDatastore } from 'datastore-core/memory';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';


// Types for OrbitDB and its stores might be needed from @orbitdb/core if used directly
// import { LogStore } from '@orbitdb/core';

let orbit: any = null; // Using 'any' for now, replace with OrbitDB type from @orbitdb/core if available
let heliaNode: Helia | null = null;
let libp2pNode: Libp2p<any> | null = null; // Using 'any' for identify service, replace with proper type

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
    libp2pNode.getMultiaddrs().forEach((addr) => {
      logInfo('Listening on:', { data: addr.toString() });
    });

    // Listen for new connections
    libp2pNode.addEventListener('peer:connect', (evt) => {
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
