import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs-extra';
import path from 'path';

async function writeFiles(id: string, markdown: string, jsonData: any, meta: any) {
  const dir = path.join(process.cwd(), 'public', 'proposals');
  await fs.ensureDir(dir);
  const mdPath = path.join(dir, `${id}.md`);
  const jsonPath = path.join(dir, `${id}.json`);
  await fs.writeFile(mdPath, markdown, 'utf8');
  await fs.writeJson(jsonPath, { id, meta, data: jsonData }, { spaces: 2 });
  return { mdPath, jsonPath };
}

async function createPdf(id: string, markdown: string) {
  try {
    const PDFDocument = (await import('pdfkit')).default;
    const doc = new PDFDocument({ margin: 48 });
    const dir = path.join(process.cwd(), 'public', 'proposals');
    await fs.ensureDir(dir);
    const pdfPath = path.join(dir, `${id}.pdf`);
    const stream = fs.createWriteStream(pdfPath);
    doc.pipe(stream);
    const lines = markdown.split('\n');
    lines.forEach((line) => {
      if (line.startsWith('# ')) {
        doc.fontSize(20).text(line.replace(/^#\s*/, ''), { underline: true });
      } else if (line.startsWith('## ')) {
        doc.moveDown(0.3).fontSize(16).text(line.replace(/^##\s*/, ''));
      } else {
        doc.moveDown(0.1).fontSize(11).text(line);
      }
    });
    doc.end();
    await new Promise((resolve) => stream.on('finish', resolve));
    return pdfPath;
  } catch {
    return null;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { markdown, json, meta } = req.body || {};
  const id = meta?.id || uuidv4();

  const { mdPath, jsonPath } = await writeFiles(id, markdown || '', json || {}, meta || {});
  const pdfPath = await createPdf(id, markdown || '');

  res.status(200).json({
    id,
    mdUrl: `/proposals/${id}.md`,
    jsonUrl: `/proposals/${id}.json`,
    pdfUrl: pdfPath ? `/proposals/${id}.pdf` : undefined,
  });
}