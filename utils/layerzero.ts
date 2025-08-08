import { SupportedChainKey, CHAINS } from './chains';

export type OftConfig = {
  // OFT token per chain; use env vars or config
  addresses: Partial<Record<SupportedChainKey, string>>;
};

export const OFT_CONFIG: OftConfig = {
  addresses: {
    ethereum: process.env.NEXT_PUBLIC_ZION_OFT_ETHEREUM || '',
    polygon: process.env.NEXT_PUBLIC_ZION_OFT_POLYGON || '',
    arbitrum: process.env.NEXT_PUBLIC_ZION_OFT_ARBITRUM || '',
    optimism: process.env.NEXT_PUBLIC_ZION_OFT_OPTIMISM || '',
    avalanche: process.env.NEXT_PUBLIC_ZION_OFT_AVALANCHE || '',
    bnb: process.env.NEXT_PUBLIC_ZION_OFT_BNB || '',
  },
};

export function isOftConfigured(chainKey: SupportedChainKey): boolean {
  const address = OFT_CONFIG.addresses[chainKey];
  return !!address && address !== '0x0000000000000000000000000000000000000000';
}

// LayerZero V2 EIDs are included in CHAINS; any advanced config can be added here later.
export const LZ_EIDS = Object.fromEntries(
  Object.entries(CHAINS).map(([k, v]) => [k, v.lzEid])
) as Record<SupportedChainKey, number>;