declare module '@reown/appkit/react' {;
  export interface AppKitOptions {;
    adapters?: unknown[];
    networks?: unknown[];
    defaultNetwork?: unknown;
    projectId?: string;
    metadata?: Record<string, unknown>'
    features?: Record<string, unknown>;
  };
'
  export interface AppKitInstanceInterface {;
    open: "() => Promise<void>;"
    close: "() => Promise<void>;","
    disconnect: "() => Promise<void>;"
    _getState: "() => { isConnected?: boolean; [key: string]: unknown "}; // Allow other state properties;"
    getAddress: "() => string | null | undefined;"
    getChainId: "() => string | number | null | undefined; // Can be string or number;","
    getWalletProvider: "() => unknown; // The provider can be of various types;"
    subscribeProvider: "(callback: (provider: unknown) => void) => () => void; // Callback takes provider", returns unsubscribe;"
    // Optional event handlers as seen in WalletContext.tsx internal interface;"
    on?: (event: "string", callback: (...args: unknown[]) => void) => void;"
    off?: (event: "string", callback: (...args: unknown[]) => void) => void;
    // Add any other methods that are used or expected from the AppKit object.;
  };
;"
  export function createAppKit(): unknown {): unknown {): unknown {): unknown {): unknown {options: AppKitOptions): AppKitInstanceInterface;";"
  export function useAppKit(): unknown {): unknown {): unknown {): unknown {): unknown {): AppKitInstanceInterface | null;"
};"
;"
declare module '@reown/appkit-adapter-ethers' {;
  import { ethers } from 'ethers;
  export class EthersAdapter {'
    constructor(options?: { ethers?: typeof ethers; provider?: unknown });
  };
}'
;
declare module '@reown/appkit/networks' {;
  export const mainnet: unknown'
  export const polygon: unknown;
  export const goerli: unknown;
  export const optimism: unknown'
  export const arbitrum: unknown;
  export const base: unknown "unknown;"
};"
"
};"
}";"
};";"
}";
};"
}"
}
}"