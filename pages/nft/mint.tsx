import React, { useMemo, useState } from 'react';

type SupportedChain = 'ethereum' | 'polygon' | 'base' | 'starknet' | 'arbitrum';

const defaultTitle = 'Zion Genesis Artifact #0001';
const defaultDescription = 'This NFT marks the moment Zion OS was born.';
const defaultQuote = 'Sovereign AI belongs to its creators and communities.';

export default function MintOriginPage() {
  const [title, setTitle] = useState(defaultTitle);
  const [description, setDescription] = useState(defaultDescription);
  const [manifestoLink, setManifestoLink] = useState('');
  const [genesisDaoHash, setGenesisDaoHash] = useState('');
  const [coverArtLink, setCoverArtLink] = useState('');
  const [firstFundingVoteLink, setFirstFundingVoteLink] = useState('');
  const [founderAddress, setFounderAddress] = useState('');
  const [chain, setChain] = useState<SupportedChain>('ethereum');
  const [quote, setQuote] = useState(defaultQuote);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const imagePreviewUrl = useMemo(() => `/api/nft/origin-image?quote=${encodeURIComponent(quote)}`, [quote]);

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('/api/nft/origin-metadata', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          manifestoLink,
          genesisDaoHash,
          coverArtLink,
          firstFundingVoteLink,
          founderAddress,
          chain,
          manifestoQuote: quote
        })
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setResult({ error: 'Failed to generate metadata' });
    } finally {
      setLoading(false);
    }
  }

  function handleDownload() {
    if (!result?.metadata) return;
    const blob = new Blob([JSON.stringify(result.metadata, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'zion-origin-metadata.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-black text-cyan-100">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-3xl font-semibold">Mint: Zion Genesis Artifact #0001</h1>
        <p className="mt-2 text-cyan-300/80">1-of-1 Origin NFT — Sovereign AI Protocol</p>

        <form onSubmit={handleGenerate} className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="block text-sm">Title</label>
              <input className="mt-1 w-full rounded-md bg-cyan-950/40 p-2 outline-none ring-1 ring-cyan-800 focus:ring-cyan-500" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm">Description</label>
              <textarea className="mt-1 w-full rounded-md bg-cyan-950/40 p-2 outline-none ring-1 ring-cyan-800 focus:ring-cyan-500" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm">Manifesto (IPFS or URL)</label>
              <input className="mt-1 w-full rounded-md bg-cyan-950/40 p-2 outline-none ring-1 ring-cyan-800 focus:ring-cyan-500" value={manifestoLink} onChange={(e) => setManifestoLink(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm">Genesis DAO hash (IPFS or hash)</label>
              <input className="mt-1 w-full rounded-md bg-cyan-950/40 p-2 outline-none ring-1 ring-cyan-800 focus:ring-cyan-500" value={genesisDaoHash} onChange={(e) => setGenesisDaoHash(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm">Book cover art (IPFS or URL)</label>
              <input className="mt-1 w-full rounded-md bg-cyan-950/40 p-2 outline-none ring-1 ring-cyan-800 focus:ring-cyan-500" value={coverArtLink} onChange={(e) => setCoverArtLink(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm">First funding vote (IPFS or URL)</label>
              <input className="mt-1 w-full rounded-md bg-cyan-950/40 p-2 outline-none ring-1 ring-cyan-800 focus:ring-cyan-500" value={firstFundingVoteLink} onChange={(e) => setFirstFundingVoteLink(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm">Founder signature (wallet address)</label>
              <input className="mt-1 w-full rounded-md bg-cyan-950/40 p-2 outline-none ring-1 ring-cyan-800 focus:ring-cyan-500" value={founderAddress} onChange={(e) => setFounderAddress(e.target.value)} placeholder="0x..." />
            </div>
            <div>
              <label className="block text-sm">Chain</label>
              <select className="mt-1 w-full rounded-md bg-cyan-950/40 p-2 outline-none ring-1 ring-cyan-800 focus:ring-cyan-500" value={chain} onChange={(e) => setChain(e.target.value as SupportedChain)}>
                <option value="ethereum">Ethereum Mainnet</option>
                <option value="polygon">Polygon</option>
                <option value="base">Base</option>
                <option value="starknet">Starknet</option>
                <option value="arbitrum">Arbitrum</option>
              </select>
            </div>
            <div>
              <label className="block text-sm">Reveal quote (from manifesto)</label>
              <input className="mt-1 w-full rounded-md bg-cyan-950/40 p-2 outline-none ring-1 ring-cyan-800 focus:ring-cyan-500" value={quote} onChange={(e) => setQuote(e.target.value)} />
            </div>
            <button type="submit" className="w-full rounded-md bg-cyan-600 px-4 py-2 font-medium text-black hover:bg-cyan-500 disabled:opacity-50" disabled={loading}>
              {loading ? 'Generating…' : 'Generate Metadata'}
            </button>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-cyan-900/60 bg-cyan-950/30 p-3">
              <div className="text-sm mb-2">Visual Preview</div>
              <img src={imagePreviewUrl} alt="Zion Genesis Artifact" className="w-full rounded" />
            </div>
            <div className="rounded-lg border border-cyan-900/60 bg-cyan-950/30 p-3">
              <div className="flex items-center justify-between">
                <div className="text-sm">Metadata</div>
                <div className="space-x-2">
                  <button type="button" onClick={handleDownload} className="rounded bg-cyan-700 px-3 py-1 text-xs text-black hover:bg-cyan-500" disabled={!result?.metadata}>Download JSON</button>
                  {result?.imageUrl && (
                    <a className="rounded bg-cyan-800 px-3 py-1 text-xs hover:bg-cyan-700" href={result.imageUrl} target="_blank" rel="noreferrer">Open Image</a>
                  )}
                </div>
              </div>
              <pre className="mt-2 max-h-80 overflow-auto whitespace-pre-wrap break-words text-xs">
                {result ? JSON.stringify(result, null, 2) : 'Fill in the form and click Generate to preview metadata.'}
              </pre>
            </div>
            <div className="rounded-lg border border-cyan-900/60 bg-cyan-950/30 p-3 text-xs text-cyan-300/80">
              <div className="font-medium mb-1">Utility</div>
              <ul className="list-disc pl-5">
                <li>Unlocks vault access</li>
                <li>Displays on founder profile</li>
                <li>Adds signature to all downstream DAO proposals</li>
              </ul>
              <div className="mt-3">On-chain mint requires wallet integration and a contract; the API provides finalized metadata for pinning and minting.</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}