export type ChainConfig = {
  id: number;
  name: string;
  symbol: string;
  rpcUrl: string;
  explorerUrl: string;
  lzEid: number; // LayerZero endpoint ID (v2)
};

export const CHAINS: Record<string, ChainConfig> = {
  ethereum: {
    id: 1,
    name: 'Ethereum',
    symbol: 'ETH',
    rpcUrl: 'https://rpc.ankr.com/eth',
    explorerUrl: 'https://etherscan.io',
    lzEid: 30101,
  },
  polygon: {
    id: 137,
    name: 'Polygon',
    symbol: 'MATIC',
    rpcUrl: 'https://rpc.ankr.com/polygon',
    explorerUrl: 'https://polygonscan.com',
    lzEid: 30109,
  },
  arbitrum: {
    id: 42161,
    name: 'Arbitrum',
    symbol: 'ETH',
    rpcUrl: 'https://rpc.ankr.com/arbitrum',
    explorerUrl: 'https://arbiscan.io',
    lzEid: 30110,
  },
  optimism: {
    id: 10,
    name: 'Optimism',
    symbol: 'ETH',
    rpcUrl: 'https://rpc.ankr.com/optimism',
    explorerUrl: 'https://optimistic.etherscan.io',
    lzEid: 30111,
  },
  avalanche: {
    id: 43114,
    name: 'Avalanche',
    symbol: 'AVAX',
    rpcUrl: 'https://rpc.ankr.com/avalanche',
    explorerUrl: 'https://snowtrace.io',
    lzEid: 30106,
  },
  bnb: {
    id: 56,
    name: 'BNB Chain',
    symbol: 'BNB',
    rpcUrl: 'https://rpc.ankr.com/bsc',
    explorerUrl: 'https://bscscan.com',
    lzEid: 30102,
  },
};

export const SUPPORTED_CHAIN_KEYS = [
  'ethereum',
  'polygon',
  'arbitrum',
  'optimism',
  'avalanche',
  'bnb',
] as const;

export type SupportedChainKey = typeof SUPPORTED_CHAIN_KEYS[number];

export function getChainById(chainId: number): ChainConfig | undefined {
  return Object.values(CHAINS).find((c) => c.id === chainId);
}