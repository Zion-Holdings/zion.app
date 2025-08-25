import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

export function Wallet({ onProvider }: { onProvider: (p: ethers.providers.Web3Provider | null) => void }) {
  const [account, setAccount] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ((window as any).ethereum) {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      onProvider(provider);
      provider.listAccounts().then((accs) => {
        if (accs.length) setAccount(accs[0]);
      });
      (window as any).ethereum.on("accountsChanged", (accs: string[]) => setAccount(accs[0] || ""));
    } else {
      onProvider(null);
    }
  }, [onProvider]);

  async function connect() {
    if (!(window as any).ethereum) return;
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    setAccount(await signer.getAddress());
    onProvider(provider);
  }

  return (
    <div className="flex items-center gap-2">
      {account ? (
        <span className="px-2 py-1 rounded bg-green-100 text-green-800 text-sm">{account.slice(0,6)}...{account.slice(-4)}</span>
      ) : (
        <button onClick={connect} className="px-3 py-1 rounded bg-blue-600 text-white text-sm">Connect Wallet</button>
      )}
    </div>
  );
}