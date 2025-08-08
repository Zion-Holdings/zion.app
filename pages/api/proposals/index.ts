import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';

const FILE_PATH = path.join(process.cwd(), 'data', 'proposals', 'index.json');

async function ensureStore() {
  await fs.ensureFile(FILE_PATH);
  try {
    const raw = await fs.readFile(FILE_PATH, 'utf8');
    if (!raw) await fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
  } catch {
    await fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await ensureStore();
  if (req.method === 'GET') {
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data);
  }
  if (req.method === 'POST') {
    const body = req.body || {};
    const data = await fs.readJson(FILE_PATH);
    const item = {
      id: body.id,
      title: body.title,
      targetInstitution: body.targetInstitution,
      regionalScope: body.regionalScope,
      type: body.type,
      status: body.status || 'Draft',
      createdAt: new Date().toISOString(),
    };
    data.items.unshift(item);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res.status(201).json(item);
  }
  res.status(405).json({ error: 'Method not allowed' });
}