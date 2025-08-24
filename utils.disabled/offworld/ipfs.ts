import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';

// Lazy imports to keep optional deps optional
let Web3Storage: any;
let getFilesFromPath: any;
let createIpfsClient: any;
let PinataSDK: any;

async function lazyLoadDeps() {
  try {
    const web3 = await import('web3.storage');
    Web3Storage = web3.Web3Storage;
    getFilesFromPath = (web3 as any).getFilesFromPath;
  } catch {}
  try {
    const ipfsHttp = await import('ipfs-http-client');
    createIpfsClient = (ipfsHttp as any).create || ipfsHttp;
  } catch {}
  try {
    const pinata = await import('@pinata/sdk');
    PinataSDK = (pinata as any).default || pinata;
  } catch {}
}

export type IpfsClientChoice = 'web3.storage' | 'pinata' | 'local-ipfs';

export interface IpfsResult {
  cid: string;
  provider: IpfsClientChoice | 'none';
}

function env(name: string): string | undefined {
  return process.env[name] || process.env[name.toLowerCase()];
}

function bufferToStream(buffer: Buffer): Readable {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
}

export async function addJSON(content: unknown): Promise<IpfsResult> {
  const json = Buffer.from(JSON.stringify(content, null, 2));
  return addBuffer(json, 'data.json');
}

export async function addBuffer(buffer: Buffer, filename = 'file.bin'): Promise<IpfsResult> {
  await lazyLoadDeps();

  // 1) Try Web3.Storage
  const web3Token = env('WEB3_STORAGE_TOKEN');
  if (Web3Storage && web3Token) {
    const client = new Web3Storage({ token: web3Token });
    const fileLike = new File([buffer], filename);
    const cid = await client.put([fileLike], { wrapWithDirectory: false });
    return { cid, provider: 'web3.storage' };
  }

  // 2) Try Pinata
  const pinataJwt = env('PINATA_JWT');
  const pinataApiKey = env('PINATA_API_KEY');
  const pinataSecret = env('PINATA_API_SECRET');
  if (PinataSDK && (pinataJwt || (pinataApiKey && pinataSecret))) {
    const pinata = pinataJwt
      ? new PinataSDK({ pinataJWTKey: pinataJwt })
      : new PinataSDK(pinataApiKey, pinataSecret);
    const res = await pinata.pinFileToIPFS(bufferToStream(buffer), {
      pinataMetadata: { name: filename },
    } as any);
    return { cid: res.IpfsHash, provider: 'pinata' };
  }

  // 3) Try local IPFS
  const ipfsUrl = env('IPFS_API') || 'http://127.0.0.1:5001';
  if (createIpfsClient) {
    const ipfs = createIpfsClient({ url: ipfsUrl });
    const { cid } = await ipfs.add({ path: filename, content: buffer });
    return { cid: cid.toString(), provider: 'local-ipfs' };
  }

  return { cid: '', provider: 'none' };
}

export async function addDirectory(dirPath: string): Promise<IpfsResult> {
  await lazyLoadDeps();

  // Prefer Web3.Storage for directories
  const web3Token = env('WEB3_STORAGE_TOKEN');
  if (Web3Storage && web3Token) {
    const client = new Web3Storage({ token: web3Token });
    if (!getFilesFromPath) {
      // Fallback: manually collect files
      const files: File[] = [];
      function walk(current: string, base = '') {
        const entries = fs.readdirSync(current, { withFileTypes: true });
        for (const entry of entries) {
          const full = path.join(current, entry.name);
          const rel = path.posix.join(base, entry.name);
          if (entry.isDirectory()) {
            walk(full, rel);
          } else {
            const data = fs.readFileSync(full);
            files.push(new File([data], rel));
          }
        }
      }
      walk(dirPath);
      const cid = await client.put(files, { wrapWithDirectory: true });
      return { cid, provider: 'web3.storage' };
    } else {
      const files = await getFilesFromPath(dirPath);
      const cid = await client.put(files, { wrapWithDirectory: true });
      return { cid, provider: 'web3.storage' };
    }
  }

  // Pinata bulk upload (pack as CAR is better; for now add recursively via local ipfs)
  const ipfsUrl = env('IPFS_API') || 'http://127.0.0.1:5001';
  if (createIpfsClient) {
    const ipfs = createIpfsClient({ url: ipfsUrl });
    // Add recursively
    const files: any[] = [];
    function* walk(dir: string, base = ''): any {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const full = path.join(dir, entry.name);
        const rel = path.posix.join(base, entry.name);
        if (entry.isDirectory()) {
          yield* walk(full, rel);
        } else {
          const content = fs.readFileSync(full);
          yield { path: rel, content };
        }
      }
    }
    for (const f of walk(dirPath)) files.push(f);

    let rootCid = '';
    for await (const res of ipfs.addAll(files, { wrapWithDirectory: true, pin: true })) {
      if (res.path === '') rootCid = res.cid?.toString?.() || rootCid;
      rootCid = res.cid?.toString?.() || rootCid;
    }
    if (rootCid) return { cid: rootCid, provider: 'local-ipfs' };
  }

  // As a last resort, try Pinata pinByHash after local add (requires prior add)
  return { cid: '', provider: 'none' };
}

export async function publishManifesto(topic: string, message: string): Promise<boolean> {
  await lazyLoadDeps();
  const ipfsUrl = env('IPFS_API') || 'http://127.0.0.1:5001';
  if (!createIpfsClient) return false;
  try {
    const ipfs = createIpfsClient({ url: ipfsUrl });
    await ipfs.pubsub.publish(topic, new TextEncoder().encode(message));
    return true;
  } catch {
    return false;
  }
}

export const OFFWORLD_TOPICS = {
  manifesto: 'zion.manifesto.broadcast',
  chat: 'zion.chat.messages',
  votes: 'zion.dao.votes',
};