import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

async function signContent(payload: string) {
  try {
    const { ethers } = await import('ethers');
    const pk = process.env.DAO_SIGNER_PRIVATE_KEY;
    if (!pk) return { signature: null, address: null };
    const wallet = new ethers.Wallet(pk);
    const hash = ethers.utils.hashMessage(payload);
    const signature = await wallet.signMessage(payload);
    return { signature, address: wallet.address, hash };
  } catch {
    return { signature: null, address: null };
  }
}

async function ipfsUpload(content: any) {
  try {
    const { create } = await import('ipfs-http-client');
    const url = process.env.IPFS_API_URL || 'https://ipfs.infura.io:5001/api/v0';
    const token = process.env.IPFS_API_TOKEN;
    const client = token ? create({ url, headers: { Authorization: `Basic ${token}` } as any }) : create({ url });
    const { cid } = await client.add(JSON.stringify(content));
    return cid.toString();
  } catch {
    return null;
  }
}

async function sendEmail(subject: string, text: string, attachments: any[]) {
  try {
    const nodemailer = (await import('nodemailer')).default;
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.SUBMISSION_TO_EMAIL; // e.g., un.dp@gateway.org
    const from = process.env.SUBMISSION_FROM_EMAIL || user;
    if (!host || !user || !pass || !to) return { queued: false, error: 'Email not configured' };
    const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
    await transporter.sendMail({ from, to, subject, text, attachments });
    return { queued: true };
  } catch (e: any) {
    return { queued: false, error: e?.message || 'Email error' };
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { markdown, json, meta } = req.body || {};
  const payload = JSON.stringify({ markdown, json, meta });

  const signature = await signContent(payload);
  const ipfsCid = await ipfsUpload({ markdown, json, meta, signature });

  const emailResult = await sendEmail(
    `Zion DAO Proposal: ${json?.title || meta?.targetInstitution || 'International Proposal'}`,
    markdown || 'Attached proposal',
    [
      { filename: 'proposal.md', content: markdown || '' },
      { filename: 'proposal.json', content: JSON.stringify(json || {}, null, 2) },
    ]
  );

  // Persist minimal index for transparency page (via proposals index route)
  try {
    const save = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/proposals`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: crypto.randomUUID(),
        title: json?.title || `Zion x ${meta?.targetInstitution}`,
        targetInstitution: meta?.targetInstitution || 'UN',
        regionalScope: meta?.regionalScope || 'Global',
        type: meta?.type || 'Workforce Dev',
        status: 'Submitted',
      }),
    } as any);
    await save.json().catch(() => null);
  } catch {}

  res.status(200).json({ status: emailResult.queued ? 'submitted' : 'generated', ipfsCid, signature });
}