let DIDKit: any;
let ethers: any;

async function lazyLoadDeps() {
  try {
    DIDKit = await import('@spruceid/didkit-wasm-node');
  } catch {}
  try {
    ethers = await import('ethers');
  } catch {}
}

export interface IdentityProfile {
  did?: string;
  ens?: string | null;
  lens?: string | null;
  address?: string | null;
}

export async function generateDIDKey(): Promise<string | null> {
  await lazyLoadDeps();
  if (!DIDKit) return null;
  try {
    const key = await DIDKit.generateEd25519Key();
    const did = await DIDKit.keyToDID('key', key);
    return did;
  } catch {
    return null;
  }
}

export async function resolveENS(address: string): Promise<string | null> {
  await lazyLoadDeps();
  if (!ethers) return null;
  try {
    const provider = ethers.getDefaultProvider();
    return await provider.lookupAddress(address);
  } catch {
    return null;
  }
}

export async function resolveLens(handleOrAddress: string): Promise<string | null> {
  // Placeholder: Lens API would be online; return null in offworld
  return null;
}

export async function buildIdentityProfile(address?: string): Promise<IdentityProfile> {
  const did = await generateDIDKey();
  const ens = address ? await resolveENS(address) : null;
  const lens = address ? await resolveLens(address) : null;
  return { did: did || undefined, ens, lens, address: address || null };
}