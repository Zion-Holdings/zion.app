import { addJSON, IpfsResult } from './ipfs';

export interface OffworldDescriptor<T> {
  type: 'job' | 'profile' | 'proposal' | 'token' | 'doc';
  data: T;
  cid: string;
  provider: string;
}

async function pin<T>(type: OffworldDescriptor<T>['type'], data: T): Promise<OffworldDescriptor<T>> {
  const { cid, provider } = await addJSON({ type, data, ts: Date.now() });
  if (!cid) throw new Error('IPFS unavailable');
  return { type, data, cid, provider };
}

export const pinJob = <T extends Record<string, any>>(job: T) => pin('job', job);
export const pinProfile = <T extends Record<string, any>>(profile: T) => pin('profile', profile);
export const pinProposal = <T extends Record<string, any>>(proposal: T) => pin('proposal', proposal);
export const pinTokenMeta = <T extends Record<string, any>>(tokenMeta: T) => pin('token', tokenMeta);
export const pinDoc = <T extends Record<string, any>>(doc: T) => pin('doc', doc);