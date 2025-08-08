import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { decryptToJsonObject, deleteVaultFile, encryptJsonObject, readVaultFile, sha256Hex, writeVaultFile } from '../../../utils/crypto';
import type { PersistedVaultFile, VaultMetadata } from '../../../utils/crypto';
import zlib from 'zlib';

export type VaultContents = {
  daoGenesisKey?: string;
  multisigFallback?: string;
  treasuryRecoveryAddress?: string;
  initialDistribution?: Record<string, number>;
  manifestoVersions?: Array<{ version: string; content: string }>;
  whitepaperHistory?: Array<{ version: string; content: string; date: string }>;
  roadmapHistory?: Array<{ version: string; content: string; date: string }>;
  gptPromptBase?: string;
};

type Method = 'POST' | 'GET' | 'PUT';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method as Method;
  try {
    if (method === 'POST') {
      const { action } = req.query;
      if (action === 'create') return createVault(req, res);
      if (action === 'unlock') return unlockVault(req, res);
      if (action === 'export') return exportVault(req, res);
      if (action === 'export-enc') return exportEncryptedVault(req, res);
      if (action === 'nft-metadata') return nftMetadata(req, res);
      if (action === 'simulate-failure') return simulateFailure(req, res);
      return res.status(400).json({ error: 'Invalid action' });
    }
    if (method === 'GET') {
      const { vaultId } = req.query as { vaultId?: string };
      if (!vaultId) return res.status(400).json({ error: 'vaultId required' });
      const file = readVaultFile(vaultId);
      if (!file) return res.status(404).json({ error: 'Vault not found' });
      const meta = file.meta;
      return res.status(200).json({ meta, hasPayload: !!file.payload });
    }
    if (method === 'PUT') {
      const { action } = req.query;
      if (action === 'push-ipfs') return pushToIpfs(req, res);
      return res.status(400).json({ error: 'Invalid action' });
    }
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e: any) {
    return res.status(500).json({ error: 'Internal error', details: e?.message });
  }
}

async function createVault(req: NextApiRequest, res: NextApiResponse) {
  const { vaultId, passphrase, guardians, guardianThreshold, maxFailedAttempts, daoAlertWebhook, contents } = req.body as {
    vaultId: string;
    passphrase: string;
    guardians?: string[]; // emails, wallet addresses
    guardianThreshold?: number;
    maxFailedAttempts?: number;
    daoAlertWebhook?: string;
    contents: VaultContents;
  };
  if (!vaultId || !passphrase || !contents) return res.status(400).json({ error: 'vaultId, passphrase, contents required' });

  const payload = await encryptJsonObject(contents, passphrase);
  const metadata: VaultMetadata = {
    vaultId,
    failedAttempts: 0,
    maxFailedAttempts: maxFailedAttempts ?? 5,
    guardiansHashed: (guardians ?? []).map((g) => sha256Hex(g.toLowerCase())),
    guardianThreshold: guardianThreshold ?? Math.min(2, guardians?.length ?? 0),
    daoAlertWebhook,
    lastUpdatedAt: new Date().toISOString(),
  };
  const file: PersistedVaultFile = { meta: metadata, payload };
  writeVaultFile(vaultId, file);
  return res.status(201).json({ ok: true, meta: metadata });
}

async function unlockVault(req: NextApiRequest, res: NextApiResponse) {
  const { vaultId, passphrase, guardians } = req.body as {
    vaultId: string;
    passphrase?: string;
    guardians?: string[]; // supplied guardian emails or addresses
  };
  if (!vaultId) return res.status(400).json({ error: 'vaultId required' });
  const file = readVaultFile(vaultId);
  if (!file) return res.status(404).json({ error: 'Not found' });

  const meetsGuardianThreshold = () => {
    if (!guardians || guardians.length === 0) return false;
    const provided = new Set(guardians.map((g) => sha256Hex(g.toLowerCase())));
    let matches = 0;
    for (const gh of file.meta.guardiansHashed) {
      if (provided.has(gh)) matches++;
    }
    return matches >= file.meta.guardianThreshold;
  };

  let unlocked = false;
  try {
    if (passphrase) {
      await decryptToJsonObject(file.payload, passphrase);
      unlocked = true;
    } else if (meetsGuardianThreshold()) {
      unlocked = true;
    }
  } catch (_e) {
    unlocked = false;
  }

  if (!unlocked) {
    // increment failures and maybe self-destruct
    file.meta.failedAttempts += 1;
    file.meta.lastUpdatedAt = new Date().toISOString();
    writeVaultFile(vaultId, file);
    if (file.meta.failedAttempts >= file.meta.maxFailedAttempts) {
      const alert = await triggerDaoAlert(file.meta.daoAlertWebhook, `Vault ${vaultId} reached max failed attempts`);
      deleteVaultFile(vaultId);
      return res.status(423).json({ error: 'Vault self-destructed', alert });
    }
    return res.status(401).json({ error: 'Unauthorized', attempts: file.meta.failedAttempts });
  }

  // success: return decrypted contents
  const contents = passphrase ? await decryptToJsonObject<VaultContents>(file.payload, passphrase!) : undefined;
  file.meta.failedAttempts = 0;
  file.meta.lastUpdatedAt = new Date().toISOString();
  writeVaultFile(vaultId, file);
  return res.status(200).json({ ok: true, contents });
}

async function exportVault(req: NextApiRequest, res: NextApiResponse) {
  const { vaultId } = req.body as { vaultId: string };
  if (!vaultId) return res.status(400).json({ error: 'vaultId required' });
  const file = readVaultFile(vaultId);
  if (!file) return res.status(404).json({ error: 'Not found' });
  const json = JSON.stringify(file, null, 2);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Disposition', `attachment; filename="zion-vault-${vaultId}.json"`);
  return res.status(200).send(json);
}

async function exportEncryptedVault(req: NextApiRequest, res: NextApiResponse) {
  const { vaultId, passphrase } = req.body as { vaultId: string; passphrase: string };
  if (!vaultId || !passphrase) return res.status(400).json({ error: 'vaultId and passphrase required' });
  const file = readVaultFile(vaultId);
  if (!file) return res.status(404).json({ error: 'Not found' });
  const gzip = zlib.gzipSync(Buffer.from(JSON.stringify(file), 'utf8'));
  const { encryptJsonObject } = await import('../../../utils/crypto');
  const wrapped = await encryptJsonObject({ type: 'vault-gzip', data: gzip.toString('base64') }, passphrase);
  res.setHeader('Content-Type', 'application/octet-stream');
  res.setHeader('Content-Disposition', `attachment; filename="zion-vault-${vaultId}.zip.enc"`);
  return res.status(200).send(JSON.stringify(wrapped));
}

async function nftMetadata(req: NextApiRequest, res: NextApiResponse) {
  const { vaultId, cid } = req.body as { vaultId: string; cid?: string };
  if (!vaultId) return res.status(400).json({ error: 'vaultId required' });
  const file = readVaultFile(vaultId);
  if (!file) return res.status(404).json({ error: 'Not found' });
  const metadata = {
    name: `Zion Vault ${vaultId}`,
    description: 'Encrypted backup vault metadata for Zion Founders',
    external_url: `https://zion.app/admin/vault?vaultId=${encodeURIComponent(vaultId)}`,
    image: cid ? `ipfs://${cid}` : undefined,
    attributes: [
      { trait_type: 'failedAttempts', value: file.meta.failedAttempts },
      { trait_type: 'maxFailedAttempts', value: file.meta.maxFailedAttempts },
      { trait_type: 'guardianThreshold', value: file.meta.guardianThreshold },
    ],
  };
  return res.status(200).json({ ok: true, metadata });
}

async function simulateFailure(req: NextApiRequest, res: NextApiResponse) {
  const { vaultId } = req.body as { vaultId: string };
  if (!vaultId) return res.status(400).json({ error: 'vaultId required' });
  const file = readVaultFile(vaultId);
  if (!file) return res.status(404).json({ error: 'Not found' });
  file.meta.failedAttempts += 1;
  file.meta.lastUpdatedAt = new Date().toISOString();
  const exceeded = file.meta.failedAttempts >= file.meta.maxFailedAttempts;
  writeVaultFile(vaultId, file);
  if (exceeded) {
    const alert = await triggerDaoAlert(file.meta.daoAlertWebhook, `Vault ${vaultId} self-destruct toggled by simulation`);
    deleteVaultFile(vaultId);
    return res.status(200).json({ ok: true, selfDestructed: true, alert });
  }
  return res.status(200).json({ ok: true, failedAttempts: file.meta.failedAttempts });
}

async function pushToIpfs(req: NextApiRequest, res: NextApiResponse) {
  const { vaultId } = req.body as { vaultId: string };
  if (!vaultId) return res.status(400).json({ error: 'vaultId required' });
  const file = readVaultFile(vaultId);
  if (!file) return res.status(404).json({ error: 'Not found' });

  const token = process.env.WEB3_STORAGE_TOKEN;
  if (!token) {
    // fallback mock
    const cid = `bafy${Buffer.from(vaultId).toString('hex').slice(0, 20)}`;
    return res.status(200).json({ ok: true, cid, note: 'Set WEB3_STORAGE_TOKEN for real upload' });
  }

  try {
    const form = new FormData();
    const blob = new Blob([JSON.stringify(file, null, 2)], { type: 'application/json' });
    form.append('file', blob, `zion-vault-${vaultId}.json`);
    const resp = await fetch('https://api.web3.storage/upload', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: form as any,
    });
    if (!resp.ok) {
      const text = await resp.text();
      return res.status(502).json({ error: 'IPFS upload failed', details: text });
    }
    const data = await resp.json();
    return res.status(200).json({ ok: true, cid: data.cid || data?.value?.cid || data?.cid });
  } catch (e: any) {
    return res.status(500).json({ error: 'IPFS error', details: e?.message });
  }
}

async function triggerDaoAlert(webhook: string | undefined, message: string) {
  if (!webhook) return { sent: false };
  try {
    const https = await import('https');
    // very simple JSON POST
    await new Promise<void>((resolve, reject) => {
      const url = new URL(webhook);
      const data = JSON.stringify({ message, timestamp: new Date().toISOString() });
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) },
      } as any;
      const req = (https as any).request(url, options, (res: any) => {
        res.on('data', () => {});
        res.on('end', resolve);
      });
      req.on('error', reject);
      req.write(data);
      req.end();
    });
    return { sent: true };
  } catch (_e) {
    return { sent: false };
  }
}