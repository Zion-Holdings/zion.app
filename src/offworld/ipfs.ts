import { createHelia, Helia } from 'helia';
import { json as heliaJson } from '@helia/json';
import { CID } from 'multiformats/cid';
import { createLibp2p, Libp2p } from 'libp2p';
import { gossipsub } from '@chainsafe/libp2p-gossipsub';
import { identify } from '@libp2p/identify';
import { tcp } from '@libp2p/tcp';
import { noise } from '@chainsafe/libp2p-noise';
import { yamux } from '@chainsafe/libp2p-yamux';
import { MemoryBlockstore } from 'blockstore-memory';
import { MemoryDatastore } from 'datastore-memory';

let heliaNode: Helia | null = null;
let libp2pNode: Libp2p<any> | null = null; // Using 'any' for identify service

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

async function getHelia(): Promise<Helia> {
  if (!heliaNode) {
    console.log('Initializing Libp2p for general IPFS operations...');
    libp2pNode = await createLibp2p(libp2pOptions);
    console.log('Libp2p Initialized for IPFS. PeerID:', libp2pNode.peerId.toString());

    console.log('Initializing Helia for general IPFS operations...');
    const blockstore = new MemoryBlockstore();
    heliaNode = await createHelia({
      libp2p: libp2pNode,
      blockstore,
      datastore: new MemoryDatastore(),
    });
    console.log('Helia Initialized for IPFS.');
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

  let parsedCid: CID;
  try {
    parsedCid = CID.parse(cidString);
  } catch (error) {
    console.error('Failed to parse CID string:', error);
    throw new Error(`Invalid CID string: ${cidString}`);
  }

  const data = await jsonService.get(parsedCid);
  if (data === undefined) {
    throw new Error(`Data not found for CID: ${cidString}`);
  }
  return data;
}

export async function stopIpfsNode() {
  console.log('Stopping general IPFS Helia node...');
  if (heliaNode) {
    await heliaNode.stop();
    heliaNode = null;
    console.log('General IPFS Helia node stopped.');
  }
  if (libp2pNode) {
    await libp2pNode.stop();
    libp2pNode = null;
    console.log('Libp2p for general IPFS node stopped.');
  }
}

// Note: If this module's Helia instance is meant to be long-lived and share
// the same libp2p stack as orbitdb.ts, a shared module for libp2p/helia
// initialization would be better. For now, this creates a separate stack.
