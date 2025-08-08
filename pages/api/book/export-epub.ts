import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

// Lazy import to avoid bundling failures on old Next
async function getEpubGen() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Epub = require('epub-gen-memory');
    return Epub;
  } catch {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Epub = require('epub-gen');
    return Epub;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const EpubGen = await getEpubGen();

  const title = 'Zion OS Book';
  const subtitle = 'Civilization Protocol';
  const chapters = [
    { title: 'Chapter 1 — The Why', data: '<h3>Origin story</h3><p>Zion began as a conviction...</p>' },
    { title: 'Chapter 2 — The Blueprint', data: '<h3>Zion OS architecture</h3><p>Modules... Marketplace, DAO, AI, Token, Academy</p>' },
    { title: 'Chapter 3 — Manifesto & Constitution', data: '<h3>Values & Principles</h3>' },
    { title: 'Chapter 4 — Design Evolution', data: '<h3>Timeline & Screens</h3>' },
    { title: 'Chapter 5 — Global Footprint', data: '<h3>Ecosystem Metrics</h3>' },
    { title: 'Chapter 6 — Road to v10', data: '<h3>Roadmap & Votes</h3>' },
  ];

  const fileName = 'zion-os-book.epub';
  const tmpPath = path.join('/tmp', fileName);

  try {
    // Some packages write directly to disk
    const epub = new EpubGen({
      title: `${title} — ${subtitle}`,
      author: 'Zion',
      content: chapters,
    }, tmpPath);

    await new Promise<void>((resolve, reject) => {
      epub
        .promise
        .then(() => resolve())
        .catch((e: unknown) => reject(e));
    });

    const stat = fs.statSync(tmpPath);
    res.setHeader('Content-Type', 'application/epub+zip');
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    res.setHeader('Content-Length', stat.size.toString());
    const stream = fs.createReadStream(tmpPath);
    stream.pipe(res);
    stream.on('close', () => {
      fs.unlink(tmpPath, () => {});
    });
  } catch (e) {
    res.status(500).json({ error: 'Failed to generate EPUB', detail: String(e) });
  }
}