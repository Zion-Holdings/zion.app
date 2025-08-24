import React from "react";
import EnhancedLayout from "../../components/layout/EnhancedLayout";
import dynamic from "next/dynamic";

const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false });

export default function WalletPage() {
  return (
    <EnhancedLayout title="Your ZION$ Wallet">
      <div className="max-w-2xl mx-auto">
        <WalletPanel />
      </div>
    </EnhancedLayout>
  );
}