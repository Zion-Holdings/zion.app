import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { appendAuditLog, resolveDataPath } from '../../../../utils/api/storage';

export const config = { api: { bodyParser: false } };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const form = formidable({ multiples: false });
  form.parse(req, (err, fields, files) => {
    if (err) return res.status(400).json({ error: 'Invalid form data' });
    const section = String(fields.section || 'General');
    const file = files.file as formidable.File | undefined;
    if (!file || !file.filepath) return res.status(400).json({ error: 'File missing' });

    const targetDir = resolveDataPath(path.join('dataroom', section));
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
    const targetPath = path.join(targetDir, file.originalFilename || path.basename(file.filepath));
    fs.copyFileSync(file.filepath, targetPath);
    appendAuditLog({ type: 'file_upload', section, name: path.basename(targetPath) });
    res.status(200).json({ ok: true });
  });
}