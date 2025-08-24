import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const configPath = path.join(process.cwd(), 'data', 'dao', 'config.json');
const cachePath = path.join(process.cwd(), 'data', 'dao', 'metrics.json');

async function fetchJson(url: string) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return resp.json();
}

function readJson(p: string) {
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
}

function writeJson(p: string, v: any) {
  fs.writeFileSync(p, JSON.stringify(v, null, 2));
}

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const cfg = readJson(configPath);
    const cache = readJson(cachePath);
    const now = Date.now();
    const oneWeekMs = 7 * 24 * 60 * 60 * 1000;

    if (cache.updatedAt && now - cache.updatedAt < oneWeekMs) {
      return res.status(200).json({ ...cache, cached: true });
    }

    const apiKey = process.env.ETHERSCAN_API_KEY || '';
    const tokenAddr = cfg.token.address;

    // Top holders (using Etherscan token holder endpoint alternative: token supply holders is limited; use rich list approximation via token transactions + unique addresses)
    // For demo simplicity: fetch last N token transfers and aggregate balances via simplistic heuristic.
    const transfersUrl = `${cfg.etherscanBaseUrl}?module=account&action=tokentx&contractaddress=${tokenAddr}&page=1&offset=200&sort=desc${apiKey ? `&apikey=${apiKey}` : ''}`;
    const transfersJson = await fetchJson(transfersUrl);
    const txs = transfersJson?.result || [];

    const holderToDelta: Record<string, bigint> = {};
    for (const tx of txs) {
      const value = BigInt(tx.value || '0');
      const from = (tx.from || '').toLowerCase();
      const to = (tx.to || '').toLowerCase();
      if (from) holderToDelta[from] = (holderToDelta[from] || 0n) - value;
      if (to) holderToDelta[to] = (holderToDelta[to] || 0n) + value;
    }

    const entries = Object.entries(holderToDelta)
      .map(([address, delta]) => ({ address, netDelta: delta }))
      .sort((a, b) => (b.netDelta > a.netDelta ? 1 : -1))
      .slice(0, 10);

    const topHolders = entries.map((e) => ({ address: e.address, amount: e.netDelta.toString() }));

    // Token distribution buckets (very rough: based on netDelta approximation)
    const total = entries.reduce((acc, e) => acc + (BigInt(e.amount) > 0n ? BigInt(e.amount) : 0n), 0n);
    const distribution = entries.map((e) => ({
      address: e.address,
      percent: total > 0n ? Number((BigInt(e.amount) * 10000n) / total) / 100 : 0
    }));

    // Active proposals: Placeholder (requires specific governance contract ABI or TheGraph). We'll simulate 0 for demo.
    const activeProposals: any[] = [];

    // Governance participation rate: Placeholder heuristic (unique voters over last N proposals / total token holders in sample)
    const uniqueAddresses = new Set(txs.flatMap((t: any) => [t.from?.toLowerCase(), t.to?.toLowerCase()]).filter(Boolean));
    const participationRate = uniqueAddresses.size ? Math.min(100, Math.round((uniqueAddresses.size / Math.max(10, uniqueAddresses.size)) * 100)) : 0;

    const result = {
      updatedAt: now,
      tokenDistribution: distribution,
      topHolders,
      activeProposals,
      governanceParticipationRate: participationRate
    };

    writeJson(cachePath, result);
    return res.status(200).json(result);
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Failed to load DAO metrics' });
  }
}