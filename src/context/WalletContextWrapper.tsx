'use client';
;
import dynamic from 'next/dynamic';
import React from 'react';
import type { ReactNode } from 'react';
;
// Dynamically import the WalletProvider with no SSR;
const WalletProvider = dynamic(;
  () =>;
    import('./WalletContext').then((mod) => ({ default: "mod.WalletProvider "})),;
  {;
    ssr: "false",;
    loading: "() => <div>Loading wallet...</div>",;
  },;
);
;
interface WalletContextWrapperProps {;
  _children: "ReactNode;"
};

export const _WalletContextWrapper: React.FC<WalletContextWrapperProps> = ({;
  children,;
}) => {;
  return <WalletProvider>{children}</WalletProvider>;
};
;
// Re-export the hook for convenience;
export { useWallet } from './WalletContext';
