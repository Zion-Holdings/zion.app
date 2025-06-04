declare module '@reown/appkit/react' {
  export interface AppKitOptions {
    adapters?: any[];
    networks?: any[];
    defaultNetwork?: any;
    projectId?: string;
    metadata?: Record<string, any>;
    features?: Record<string, any>;
  }

  export interface AppKitInstanceInterface {
    open: () => Promise<void>;
    close: () => Promise<void>;
    disconnect: () => Promise<void>;
    getState: () => { isConnected?: boolean; [key: string]: any }; // Allow other state properties
    getAddress: () => string | null | undefined;
    getChainId: () => string | number | null | undefined; // Can be string or number
    getWalletProvider: () => any; // The provider can be of various types
    subscribeProvider: (callback: (provider: any) => void) => (() => void); // Callback takes provider, returns unsubscribe
    // Optional event handlers as seen in WalletContext.tsx internal interface
    on?: (event: string, callback: (...args: any[]) => void) => void;
    off?: (event: string, callback: (...args: any[]) => void) => void;
    // Add any other methods that are used or expected from the AppKit object.
  }

  export function createAppKit(options: AppKitOptions): AppKitInstanceInterface;
  export function useAppKit(): AppKitInstanceInterface | null;
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
