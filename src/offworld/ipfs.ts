import { create } from 'ipfs-http-client';

const IPFS_API = process.env.IPFS_API || 'https://ipfs.infura.io:5001/api/v0';
export const ipfs = create({ url: IPFS_API });

export async function saveJSON(data: unknown): Promise<string> {
  const { cid } = await ipfs.add(JSON.stringify(data));
  return cid.toString();
}

export async function fetchJSON(cid: string): Promise<any> {
  const stream = ipfs.cat(cid);
  const chunks: Uint8Array[] = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}
