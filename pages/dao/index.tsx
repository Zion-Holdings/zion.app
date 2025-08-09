import React, { useEffect, useMemo, useState } from "react";
import { ethers } from "ethers";
import { Wallet } from "../../components/dao/Wallet";
import { DAO_ADDRESSES, getGovernor } from "../../utils/dao";
import Link from "next/link";

export default function DaoHome() {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [proposals, setProposals] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const rpc = new ethers.providers.JsonRpcProvider((process as any).env?.NEXT_PUBLIC_RPC_URL || undefined, DAO_ADDRESSES.chainId);
      const readProvider = provider || rpc;
      const contract = getGovernor(readProvider);
      const filter = contract.filters.ProposalCreated();
      const events = await contract.queryFilter(filter, 0, "latest");
      const mapped = await Promise.all(
        events.map(async (e) => {
          const id = e.args?.proposalId?.toString?.() || e.args?.[0]?.toString?.() || "";
          const description = (e.args?.description as string) || e.args?.[8] || "";
          const snapshot = await contract.proposalSnapshot(id);
          const deadline = await contract.proposalDeadline(id);
          const state = await contract.state(id);
          return { id, description, snapshot: snapshot.toString(), deadline: deadline.toString(), state };
        })
      );
      setProposals(mapped.reverse());
    }
    load().catch(console.error);
  }, [provider]);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Zion DAO</h1>
        <Wallet onProvider={setProvider} />
      </div>
      <div className="flex gap-3">
        <Link href="/dao/create"><span className="px-3 py-2 rounded bg-blue-600 text-white text-sm cursor-pointer">Create Proposal</span></Link>
      </div>
      <h2 className="text-xl font-medium mt-6">Proposals</h2>
      <div className="space-y-3">
        {proposals.map((p) => (
          <Link key={p.id} href={`/dao/${p.id}`}>
            <div className="border rounded p-3 hover:bg-gray-50 cursor-pointer">
              <div className="text-sm text-gray-500">ID {p.id}</div>
              <div className="font-medium">{p.description}</div>
              <div className="text-xs text-gray-500">State: {p.state}</div>
            </div>
          </Link>
        ))}
        {proposals.length === 0 && <div className="text-sm text-gray-500">No proposals found.</div>}
      </div>
    </div>
  );
}