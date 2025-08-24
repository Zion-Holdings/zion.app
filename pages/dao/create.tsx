import React, { useMemo, useState } from "react";
import { ethers } from "ethers";
import { Wallet } from "../../components/dao/Wallet";
import { getGovernor } from "../../utils/dao";

export default function CreateProposal() {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [target, setTarget] = useState("");
  const [value, setValue] = useState("0");
  const [signature, setSignature] = useState("");
  const [params, setParams] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const governor = useMemo(() => (provider ? getGovernor(provider.getSigner()) : null), [provider]);

  async function propose() {
    if (!governor) return;
    setStatus("Submitting...");
    try {
      let calldata: string = "0x";
      if (signature) {
        const iface = new ethers.utils.Interface([`function ${signature}`]);
        const args = params ? JSON.parse(params) : [];
        calldata = iface.encodeFunctionData(signature.split("(")[0], args);
      }
      const tx = await governor.propose([target], [ethers.utils.parseEther(value)], [calldata], description);
      const receipt = await tx.wait();
      setStatus(`Proposed in tx ${receipt.transactionHash}`);
    } catch (e: any) {
      console.error(e);
      setStatus(e.message || "Failed");
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Create Proposal</h1>
        <Wallet onProvider={setProvider} />
      </div>
      <div className="space-y-2">
        <label className="block text-sm">Target Address</label>
        <input value={target} onChange={(e) => setTarget(e.target.value)} className="w-full border rounded p-2" placeholder="0x..." />
      </div>
      <div className="space-y-2">
        <label className="block text-sm">ETH Value (optional)</label>
        <input value={value} onChange={(e) => setValue(e.target.value)} className="w-full border rounded p-2" placeholder="0" />
      </div>
      <div className="space-y-2">
        <label className="block text-sm">Function Signature (optional)</label>
        <input value={signature} onChange={(e) => setSignature(e.target.value)} className="w-full border rounded p-2" placeholder="transfer(address,uint256)" />
        <label className="block text-sm">Params JSON (optional)</label>
        <input value={params} onChange={(e) => setParams(e.target.value)} className="w-full border rounded p-2" placeholder='["0xabc...", "1000000000000000000"]' />
      </div>
      <div className="space-y-2">
        <label className="block text-sm">Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border rounded p-2" rows={4} placeholder="Describe the change: Platform upgrade / Fund allocation / Feature prioritization" />
      </div>
      <button onClick={propose} className="px-3 py-2 rounded bg-blue-600 text-white">Submit Proposal</button>
      {status && <div className="text-sm text-gray-600">{status}</div>}
    </div>
  );
}