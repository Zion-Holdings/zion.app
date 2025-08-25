import React, { useEffect, useMemo, useState } from 'react';
import { CHAINS, SUPPORTED_CHAIN_KEYS, SupportedChainKey, getChainById } from '../../utils/chains';
import ChainBadge from './ChainBadge';
import TokenSelector from './TokenSelector';
import StatusTracker from './StatusTracker';
import { useWallet } from '../../hooks/useWallet';
import { providers, BigNumber, ethers } from 'ethers';
import { getErc20Balance, ERC20_ABI } from '../../utils/erc20';
import { OFT_CONFIG, isOftConfigured } from '../../utils/layerzero';

const RATE_LIMIT_SECONDS = 30;

function createProvider(rpcUrl: string) {
  return new ethers.providers.JsonRpcProvider(rpcUrl);
}

export default function BridgeForm() {
  const { account, connect, chainId } = useWallet();
  const [token, setToken] = useState('ZION');
  const [fromKey, setFromKey] = useState<SupportedChainKey>('ethereum');
  const [toKey, setToKey] = useState<SupportedChainKey>('polygon');
  const [balances, setBalances] = useState<Record<string, string>>({});
  const [amount, setAmount] = useState<string>('');
  const [txHash, setTxHash] = useState<string | undefined>();
  const [startedAt, setStartedAt] = useState<number | undefined>();
  const [arrived, setArrived] = useState(false);
  const [arrivalSeconds, setArrivalSeconds] = useState<number | undefined>();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const from = CHAINS[fromKey];
  const to = CHAINS[toKey];

  // Fetch balances across chains
  useEffect(() => {
    let mounted = true;
    async function load() {
      if (!account) return;
      const results: Record<string, string> = {};
      await Promise.all(
        SUPPORTED_CHAIN_KEYS.map(async (key) => {
          const chain = CHAINS[key];
          const provider = createProvider(chain.rpcUrl);
          try {
            const oftAddress = OFT_CONFIG.addresses[key];
            if (!oftAddress) {
              results[key] = '—';
              return;
            }
            const bal = await getErc20Balance(provider, oftAddress, account);
            results[key] = ethers.utils.formatUnits(bal, 18);
          } catch {
            results[key] = '—';
          }
        })
      );
      if (mounted) setBalances(results);
    }
    load();
    return () => {
      mounted = false;
    };
  }, [account]);

  const canBridge = useMemo(() => {
    if (!account) return false;
    if (fromKey === toKey) return false;
    if (!amount || Number(amount) <= 0) return false;
    if (!isOftConfigured(fromKey) || !isOftConfigured(toKey)) return false;
    return true;
  }, [account, fromKey, toKey, amount]);

  function saveTxLog(hash: string) {
    try {
      const key = 'zion_tx_logs';
      const logs = JSON.parse(localStorage.getItem(key) || '[]');
      logs.push({ hash, from: fromKey, to: toKey, amount, ts: Date.now() });
      localStorage.setItem(key, JSON.stringify(logs));
      fetch('/api/logs/tx', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ hash, from: fromKey, to: toKey, amount }) }).catch(() => {});
    } catch {}
  }

  function isRateLimited(): boolean {
    const key = 'zion_last_bridge_at';
    const last = Number(localStorage.getItem(key) || '0');
    const now = Date.now();
    if (now - last < RATE_LIMIT_SECONDS * 1000) return true;
    localStorage.setItem(key, String(now));
    return false;
  }

  async function handleBridge() {
    setError(null);
    if (!account) {
      await connect();
      return;
    }
    if (isRateLimited()) {
      setError(`Please wait ${RATE_LIMIT_SECONDS}s between transfers.`);
      return;
    }
    try {
      setBusy(true);
      setArrived(false);
      setArrivalSeconds(undefined);
      setTxHash(undefined);
      setStartedAt(Date.now());

      // In a real setup, we'd call OFT contract's sendFrom on the source chain using signer.
      // Here we simulate by creating a dummy tx if OFT addresses are configured but we cannot sign without user confirmation.
      // We attempt to detect wallet network and warn if mismatched.
      if (chainId !== from.id) {
        setError(`Switch wallet to ${from.name} network.`);
        setBusy(false);
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const oftAddress = OFT_CONFIG.addresses[fromKey]!;
      const token = new ethers.Contract(oftAddress, ERC20_ABI, signer);

      // Placeholder: we simply do an approve to self with 0 value to generate a tx hash for tracking UX in demo mode.
      const tx = await token.approve(oftAddress, 0);
      setTxHash(tx.hash);
      saveTxLog(tx.hash);

      // Simulate arrival by polling destination balance difference for up to 60s
      const destProvider = createProvider(to.rpcUrl);
      const destTokenAddr = OFT_CONFIG.addresses[toKey]!;
      let before = BigNumber.from(0);
      try {
        before = await getErc20Balance(destProvider, destTokenAddr, account);
      } catch {}

      const start = Date.now();
      const deadline = start + 60_000;
      const interval = 2000;
      async function poll(): Promise<boolean> {
        try {
          const cur = await getErc20Balance(destProvider, destTokenAddr, account);
          if (cur.gt(before)) return true;
        } catch {}
        return false;
      }

      let ok = false;
      while (Date.now() < deadline) {
        // eslint-disable-next-line no-await-in-loop
        ok = await poll();
        if (ok) break;
        // eslint-disable-next-line no-await-in-loop
        await new Promise((r) => setTimeout(r, interval));
      }

      const sec = Math.floor((Date.now() - start) / 1000);
      setArrived(ok);
      setArrivalSeconds(sec);
      setBusy(false);
    } catch (e: any) {
      setBusy(false);
      setError(e?.message || 'Failed to bridge');
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">LayerZero Cross-Chain Bridge</h2>
        <button onClick={() => (account ? null : connect())} className="px-4 py-2 rounded bg-blue-600 text-white">
          {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 p-4 border rounded border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500">From</label>
              <div className="mt-1 grid grid-cols-2 gap-2">
                {SUPPORTED_CHAIN_KEYS.map((key) => (
                  <button key={key} onClick={() => setFromKey(key)}>
                    <ChainBadge chain={CHAINS[key]} selected={fromKey === key} />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500">To</label>
              <div className="mt-1 grid grid-cols-2 gap-2">
                {SUPPORTED_CHAIN_KEYS.map((key) => (
                  <button key={key} onClick={() => setToKey(key)}>
                    <ChainBadge chain={CHAINS[key]} selected={toKey === key} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <TokenSelector value={token} onChange={setToken} />
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">Amount</label>
              <input
                type="number"
                min="0"
                step="0.000001"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.0"
                className="border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-white dark:bg-black"
              />
            </div>
            <div>
              <button
                onClick={handleBridge}
                disabled={!canBridge || busy}
                className={`w-full px-4 py-2 rounded ${canBridge && !busy ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400'} text-white`}
              >
                {busy ? 'Processing…' : 'Bridge Now'}
              </button>
            </div>
          </div>

          {error && <div className="text-red-600 text-sm mt-2">{error}</div>}

          <div className="mt-4">
            <StatusTracker from={from} to={to} txHash={txHash} startedAt={startedAt} arrived={arrived} arrivalSeconds={arrivalSeconds} />
          </div>
        </div>

        <div className="p-4 border rounded border-gray-200 dark:border-gray-800">
          <h3 className="font-medium mb-2">Balances</h3>
          <div className="space-y-2 text-sm">
            {SUPPORTED_CHAIN_KEYS.map((key) => (
              <div key={key} className="flex items-center justify-between">
                <span>{CHAINS[key].name}</span>
                <span className="tabular-nums">{balances[key] ?? '—'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}