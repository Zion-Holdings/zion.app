import { createOrbitDB } from '@orbitdb/core';
import { createHelia, Helia } from 'helia';
import { createLibp2p, Libp2p } from 'libp2p';
import { gossipsub } from '@chainsafe/libp2p-gossipsub';
import { identify } from '@libp2p/identify';
import { tcp } from '@libp2p/tcp';
import { noise } from '@chainsafe/libp2p-noise';
import { yamux } from '@chainsafe/libp2p-yamux';
import { MemoryBlockstore } from 'blockstore-memory';
import { MemoryDatastore } from 'datastore-memory';

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
    console.log('OrbitDB already initialized.');
    return;
  }

  try {
    console.log('Initializing Libp2p...');
    libp2pNode = await createLibp2p(libp2pOptions);
    console.log('Libp2p Initialized. PeerID:', libp2pNode.peerId.toString());

    // Log listening addresses
    libp2pNode.getMultiaddrs().forEach((addr) => {
      console.log('Listening on:', addr.toString());
    });

    // Listen for new connections
    libp2pNode.addEventListener('peer:connect', (evt) => {
      console.log('Peer connected:', evt.detail.toString());
    });

    console.log('Initializing Helia...');
    const blockstore = new MemoryBlockstore(); // Ephemeral blockstore for Helia
    heliaNode = await createHelia({
      libp2p: libp2pNode,
      blockstore: blockstore, // Use an appropriate blockstore
      datastore: new MemoryDatastore(), // Helia also needs a datastore
    });
    console.log('Helia Initialized.');

    console.log('Creating OrbitDB instance...');
    // OrbitDB constructor might take Helia instance directly as 'ipfs'
    // The id option can be used to give a specific identity to this OrbitDB instance
    orbit = await createOrbitDB({ ipfs: heliaNode, directory: repoPath });
    console.log('OrbitDB instance created. OrbitDB ID:', orbit.id);
  } catch (error) {
    console.error('Error initializing OrbitDB:', error);
    throw error;
  }
}

export async function getLog(name: string): Promise<any> { // Replace 'any' with specific OrbitDB LogStore type
  if (!orbit) {
    console.log('OrbitDB not initialized. Initializing now...');
    await initOrbit();
  }
  if (!orbit) {
    throw new Error('OrbitDB initialization failed.');
  }
  console.log(`Opening log store: ${name}`);
  // Types for store options might be needed
  return orbit.log(name, { /* options if any, e.g., accessController */ });
}

export async function stopOrbit() {
  console.log('Stopping OrbitDB...');
  if (orbit) {
    await orbit.stop();
    orbit = null;
    console.log('OrbitDB stopped.');
  }
  if (heliaNode) {
    await heliaNode.stop();
    heliaNode = null;
    console.log('Helia stopped.');
  }
  if (libp2pNode) {
    await libp2pNode.stop();
    libp2pNode = null;
    console.log('Libp2p stopped.');
  }
}

// Example of how to ensure cleanup on exit, if this is a long-running process
// process.on('SIGINT', async () => {
//   await stopOrbit();
//   process.exit();
// });
