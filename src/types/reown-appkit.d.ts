declare module '@reown/appkit/react' {
  export interface AppKitOptions {
    adapters?: any[];
    networks?: any[];
    defaultNetwork?: any;
    projectId?: string;
    metadata?: Record<string, any>;
    features?: Record<string, any>;
  }
  export function createAppKit(options: AppKitOptions): any;
  export function useAppKit(): any;
}

declare module '@reown/appkit-adapter-ethers' {
  import { ethers } from 'ethers';
  export class EthersAdapter {
    constructor(options?: { ethers?: typeof ethers; provider?: any });
  }
}

declare module '@reown/appkit/networks' {
  export const mainnet: any;
  export const polygon: any;
  export const goerli: any;
  export const optimism: any;
  export const arbitrum: any;
  export const base: any;
}
