import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import { Wallet } from "../../components/dao/Wallet";
import { getGovernor } from "../../utils/dao";

export default function ProposalDetail() {
  const router = useRouter();
  const { proposalId } = router.query as { proposalId?: string };
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [desc, setDesc] = useState<string>("");
  const [state, setState] = useState<number | null>(null);
  const [votes, setVotes] = useState<{for: string; against: string; abstain: string}>({for: "0", against: "0", abstain: "0"});
  const [status, setStatus] = useState("");

  const govRead = useMemo(() => (provider ? getGovernor(provider) : null), [provider]);
  const govWrite = useMemo(() => (provider ? getGovernor(provider.getSigner()) : null), [provider]);

  useEffect(() => {
    if (!proposalId || !govRead) return;
    async function load() {
      const filter = govRead.filters.ProposalCreated(proposalId);
      const events = await govRead.queryFilter(filter, 0, "latest");
      if (events.length) {
        setDesc(events[0].args?.description || "");
      }
      const st = await govRead.state(proposalId);
      setState(st);
      const [forW, againstW, abstainW] = await Promise.all([
        govRead.proposalVotes(proposalId).then((v: any) => v.forVotes.toString()),
        govRead.proposalVotes(proposalId).then((v: any) => v.againstVotes.toString()),
        govRead.proposalVotes(proposalId).then((v: any) => v.abstainVotes.toString())
      ]);
      setVotes({for: forW, against: againstW, abstain: abstainW});
    }
    load().catch(console.error);
  }, [proposalId, govRead]);

  async function castVote(support: 0 | 1 | 2) {
    if (!govWrite || !proposalId) return;
    setStatus("Submitting vote...");
    try {
      const tx = await govWrite.castVote(proposalId, support);
      await tx.wait();
      setStatus("Vote submitted");
    } catch (e: any) {
      setStatus(e.message || "Failed");
    }
  }

  async function queue() {
    // Requires providing targets/values/calldatas/descriptionHash; for demo, rely on interface short path if Governor exposes queue with full args on client
    setStatus("Queue from CLI/script recommended for now.");
  }

  async function execute() {
    setStatus("Execute from CLI/script recommended for now.");
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Proposal {proposalId}</h1>
        <Wallet onProvider={setProvider} />
      </div>
      <div className="border rounded p-4">
        <div className="font-medium">Description</div>
        <div className="text-sm whitespace-pre-wrap">{desc || "Loading..."}</div>
      </div>
      <div className="grid grid-cols-3 gap-3 text-sm">
        <div className="border rounded p-3">For: {votes.for}</div>
        <div className="border rounded p-3">Against: {votes.against}</div>
        <div className="border rounded p-3">Abstain: {votes.abstain}</div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => castVote(1)} className="px-3 py-2 rounded bg-green-600 text-white">Vote For</button>
        <button onClick={() => castVote(0)} className="px-3 py-2 rounded bg-red-600 text-white">Vote Against</button>
        <button onClick={() => castVote(2)} className="px-3 py-2 rounded bg-gray-600 text-white">Abstain</button>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <button onClick={queue} className="px-3 py-1 rounded border">Queue</button>
        <button onClick={execute} className="px-3 py-1 rounded border">Execute</button>
        {state !== null && <span>State: {state}</span>}
      </div>
      {status && <div className="text-sm text-gray-600">{status}</div>}
    </div>
  );
}