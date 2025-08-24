import type { IPFS } from 'ipfs-core-types';

let createIpfsClient: any;
let OrbitDB: any;

async function lazyLoadDeps() {
  try {
    const ipfsHttp = await import('ipfs-http-client');
    createIpfsClient = (ipfsHttp as any).create || ipfsHttp;
  } catch {}
  try {
    const orbit = await import('orbit-db');
    OrbitDB = (orbit as any).default || orbit;
  } catch {}
}

export interface OrbitStores {
  chat: any;
  votes: any;
  constitution: any;
}

export interface OrbitConnections {
  ipfs: IPFS | null;
  orbit: any | null;
  stores: OrbitStores | null;
}

export async function connectOrbit(customIpfsUrl?: string): Promise<OrbitConnections> {
  await lazyLoadDeps();
  if (!createIpfsClient || !OrbitDB) return { ipfs: null, orbit: null, stores: null };

  const ipfsUrl = customIpfsUrl || process.env.IPFS_API || 'http://127.0.0.1:5001';
  const ipfs = createIpfsClient({ url: ipfsUrl });
  const orbit = await OrbitDB.createInstance(ipfs);

  // Key stores for offworld
  const chat = await orbit.feed('zion.chat');
  const votes = await orbit.eventlog('zion.votes');
  const constitution = await orbit.docstore('zion.constitution');

  return { ipfs, orbit, stores: { chat, votes, constitution } };
}

export async function appendChatMessage(stores: OrbitStores, message: { from: string; text: string; ts?: number }) {
  if (!stores?.chat) return false;
  await stores.chat.add({ ...message, ts: message.ts || Date.now() });
  return true;
}

export async function recordVote(stores: OrbitStores, vote: { proposalId: string; voter: string; choice: string; ts?: number }) {
  if (!stores?.votes) return false;
  await stores.votes.add({ ...vote, ts: vote.ts || Date.now() });
  return true;
}

export async function editConstitution(stores: OrbitStores, change: { editor: string; section: string; diff: string; ts?: number }) {
  if (!stores?.constitution) return false;
  const id = `${Date.now()}-${change.section}`;
  await stores.constitution.put({ _id: id, ...change, ts: change.ts || Date.now() });
  return true;
}