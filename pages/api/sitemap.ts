import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  try {
    const xml = fs.readFileSync(sitemapPath, 'utf8');
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(xml);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load sitemap' });
  }
}
