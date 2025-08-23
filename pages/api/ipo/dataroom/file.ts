import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import mime from 'mime-types';
import { appendAuditLog, resolveDataPath } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const section = String(req.query.section || 'General');
  const file = String(req.query.file || '');
  if (!file) return res.status(400).json({ error: 'Missing file' });
  const fullPath = path.join(resolveDataPath(path.join('dataroom', section)), file);
  if (!fs.existsSync(fullPath)) return res.status(404).json({ error: 'Not found' });
  const contentType = (mime.lookup(fullPath) as string) || 'application/octet-stream';
  res.setHeader('Content-Type', contentType);
  appendAuditLog({ type: 'file_open', section, name: file });
  fs.createReadStream(fullPath).pipe(res);
}