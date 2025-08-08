import React, { useMemo, useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

const defaultContents = {
  daoGenesisKey: '',
  multisigFallback: '',
  treasuryRecoveryAddress: '',
  initialDistribution: {},
  manifestoVersions: [],
  whitepaperHistory: [],
  roadmapHistory: [],
  gptPromptBase: '',
};

export default function AdminVaultPage() {
  const [vaultId, setVaultId] = useState('zion-founders');
  const [passphrase, setPassphrase] = useState('');
  const [guardians, setGuardians] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [contents, setContents] = useState<any>(defaultContents);
  const [unlockedContents, setUnlockedContents] = useState<any>(null);
  const [failedAttempts, setFailedAttempts] = useState<number>(0);

  const guardianList = useMemo(() => guardians.split(/[,\n]/).map((g) => g.trim()).filter(Boolean), [guardians]);

  async function createVault() {
    setStatus('Creating...');
    const body = {
      vaultId,
      passphrase,
      guardians: guardianList,
      guardianThreshold: Math.min(2, guardianList.length || 0),
      contents,
    };
    const res = await fetch(`/api/admin/vault?action=create`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    const json = await res.json();
    setStatus(res.ok ? 'Vault created' : `Error: ${json.error}`);
  }

  async function unlockWithPassphrase() {
    setStatus('Unlocking...');
    const res = await fetch(`/api/admin/vault?action=unlock`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ vaultId, passphrase }) });
    const json = await res.json();
    if (res.ok) {
      setUnlockedContents(json.contents);
      setStatus('Unlocked');
      setFailedAttempts(0);
    } else {
      setStatus(`Unlock failed: ${json.error}`);
      setFailedAttempts(json.attempts || failedAttempts + 1);
    }
  }

  async function unlockWithGuardians() {
    setStatus('Unlocking via guardians...');
    const res = await fetch(`/api/admin/vault?action=unlock`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ vaultId, guardians: guardianList }) });
    const json = await res.json();
    if (res.ok) {
      setUnlockedContents(json.contents || '(Guardian unlock, contents hidden without passphrase)');
      setStatus('Unlocked via guardians');
      setFailedAttempts(0);
    } else {
      setStatus(`Guardian unlock failed: ${json.error}`);
      setFailedAttempts(json.attempts || failedAttempts + 1);
    }
  }

  async function simulateFailure() {
    setStatus('Simulating failure...');
    const res = await fetch(`/api/admin/vault?action=simulate-failure`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ vaultId }) });
    const json = await res.json();
    if (res.ok) {
      setStatus(json.selfDestructed ? 'Vault self-destructed' : `Failed attempts: ${json.failedAttempts}`);
    } else {
      setStatus(`Error: ${json.error}`);
    }
  }

  async function exportVault() {
    const res = await fetch(`/api/admin/vault?action=export`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ vaultId }) });
    if (!res.ok) {
      const json = await res.json();
      setStatus(`Export error: ${json.error}`);
      return;
    }
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `zion-vault-${vaultId}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function exportEncrypted() {
    const res = await fetch(`/api/admin/vault?action=export-enc`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ vaultId, passphrase }) });
    const blob = await res.blob();
    if (!res.ok) { setStatus('Encrypted export failed'); return; }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `zion-vault-${vaultId}.zip.enc`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function pushIpfs() {
    setStatus('Uploading to IPFS...');
    const res = await fetch(`/api/admin/vault?action=push-ipfs`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ vaultId }) });
    const json = await res.json();
    setStatus(res.ok ? `IPFS CID: ${json.cid}` : `IPFS error: ${json.error}`);
  }

  async function makeNftMetadata() {
    const res = await fetch(`/api/admin/vault?action=nft-metadata`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ vaultId }) });
    const json = await res.json();
    if (res.ok) {
      const data = JSON.stringify(json.metadata, null, 2);
      const url = URL.createObjectURL(new Blob([data], { type: 'application/json' }));
      const a = document.createElement('a');
      a.href = url;
      a.download = `zion-vault-${vaultId}-nft.json`;
      a.click();
      URL.revokeObjectURL(url);
      setStatus('NFT metadata downloaded');
    } else {
      setStatus(`NFT metadata error: ${json.error}`);
    }
  }

  const biometricSupported = typeof window !== 'undefined' && (navigator as any).credentials && 'isUserVerifyingPlatformAuthenticatorAvailable' in (navigator as any).credentials;

  return (
    <EnhancedLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Zion Founder Backup Vault</h1>
        <p className="text-sm text-gray-500">Securely encrypt and back up DAO essentials with social recovery and self-destruct safeguards.</p>

        {/* Lockbox animation */}
        <div className="relative h-40 w-full max-w-xl rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 overflow-hidden">
          <div className="absolute inset-0 animate-pulse opacity-30 bg-[radial-gradient(circle_at_20%_20%,#00E5FF,transparent_40%),radial-gradient(circle_at_80%_80%,#7C4DFF,transparent_40%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-20 w-20 rounded-lg bg-black/60 ring-2 ring-cyan-300 shadow-[0_0_40px_#00E5FF99]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Vault ID</label>
              <input className="w-full border rounded px-3 py-2 bg-white dark:bg-black" value={vaultId} onChange={(e) => setVaultId(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium">Passphrase</label>
              <input type="password" className="w-full border rounded px-3 py-2 bg-white dark:bg-black" value={passphrase} onChange={(e) => setPassphrase(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium">Guardians (comma or newline separated)</label>
              <textarea className="w-full border rounded px-3 py-2 h-24 bg-white dark:bg-black" value={guardians} onChange={(e) => setGuardians(e.target.value)} />
            </div>
            <div className="flex gap-2">
              <button onClick={createVault} className="px-4 py-2 rounded bg-cyan-600 text-white">Create/Update Vault</button>
              <button onClick={unlockWithPassphrase} className="px-4 py-2 rounded bg-emerald-600 text-white">Unlock (Passphrase)</button>
              <button onClick={unlockWithGuardians} className="px-4 py-2 rounded bg-amber-600 text-white">Unlock (Guardians)</button>
            </div>
            <div className="flex gap-2">
              <button onClick={exportVault} className="px-4 py-2 rounded bg-indigo-600 text-white">Export JSON</button>
              <button onClick={exportEncrypted} className="px-4 py-2 rounded bg-indigo-700 text-white">Export Encrypted</button>
              <button onClick={pushIpfs} className="px-4 py-2 rounded bg-purple-700 text-white">Push to IPFS</button>
              <button onClick={makeNftMetadata} className="px-4 py-2 rounded bg-fuchsia-700 text-white">NFT Metadata</button>
              <button onClick={simulateFailure} className="px-4 py-2 rounded bg-rose-600 text-white">Simulate Failure</button>
            </div>
            <div className="text-sm text-gray-400">{status}</div>
          </div>

          {/* Visual checklist */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Backup Checklist</h2>
            {[
              'DAO Genesis Key / Multisig fallback',
              'Treasury recovery address',
              'ZION$ initial distribution',
              'Manifesto v1-v5',
              'Whitepaper + roadmap history',
              'Original GPT prompt base (ZionGPT Core)',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>{item}</span>
              </div>
            ))}

            {/* Contents editor (minimal) */}
            <div className="mt-4 space-y-2">
              <label className="block text-sm font-medium">DAO Genesis Key</label>
              <input className="w-full border rounded px-3 py-2 bg-white dark:bg-black" value={contents.daoGenesisKey} onChange={(e) => setContents({ ...contents, daoGenesisKey: e.target.value })} />
              <label className="block text-sm font-medium">Multisig Fallback</label>
              <input className="w-full border rounded px-3 py-2 bg-white dark:bg-black" value={contents.multisigFallback} onChange={(e) => setContents({ ...contents, multisigFallback: e.target.value })} />
              <label className="block text-sm font-medium">Treasury Recovery Address</label>
              <input className="w-full border rounded px-3 py-2 bg-white dark:bg-black" value={contents.treasuryRecoveryAddress} onChange={(e) => setContents({ ...contents, treasuryRecoveryAddress: e.target.value })} />
              <label className="block text-sm font-medium">ZION$ Initial Distribution (JSON)</label>
              <textarea className="w-full border rounded px-3 py-2 h-24 bg-white dark:bg-black" value={JSON.stringify(contents.initialDistribution, null, 2)} onChange={(e) => {
                try { setContents({ ...contents, initialDistribution: JSON.parse(e.target.value || '{}') }); } catch (err) {}
              }} />
              <label className="block text-sm font-medium">ZionGPT Core Prompt</label>
              <textarea className="w-full border rounded px-3 py-2 h-24 bg-white dark:bg-black" value={contents.gptPromptBase} onChange={(e) => setContents({ ...contents, gptPromptBase: e.target.value })} />
            </div>
          </div>
        </div>

        {/* Simulate Recovery */}
        <div className="mt-8 p-4 border rounded">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Simulate Recovery</h2>
            <button onClick={unlockWithPassphrase} className="px-4 py-2 rounded bg-emerald-600 text-white">Simulate</button>
          </div>
          {unlockedContents && (
            <pre className="mt-3 text-xs overflow-auto max-h-64 p-3 bg-black/50 rounded">{JSON.stringify(unlockedContents, null, 2)}</pre>
          )}
        </div>
        <div className="text-xs text-gray-400">Biometric available: {biometricSupported ? 'Yes' : 'No'}</div>
      </div>
    </EnhancedLayout>
  );
}