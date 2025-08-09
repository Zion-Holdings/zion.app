import { promises as fs } from 'node:fs';

const name = process.env.OG_NAME || 'Jordan Lee';
const title = process.env.OG_TITLE || 'Senior AI/ML Engineer';

const width = 1200;
const height = 630;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="60"/>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="#0b1220"/>
  <g filter="url(#blur)">
    <circle cx="200" cy="100" r="180" fill="url(#g)" opacity="0.35"/>
    <circle cx="1000" cy="-20" r="220" fill="#22d3ee" opacity="0.25"/>
  </g>
  <rect x="60" y="60" width="1080" height="510" rx="24" fill="#0f172a" stroke="#7c3aed" opacity="0.9"/>
  <text x="100" y="250" fill="#e5e7eb" font-family="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" font-size="72" font-weight="700">${name}</text>
  <text x="100" y="330" fill="#c4b5fd" font-family="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" font-size="40" font-weight="600">${title}</text>
  <text x="100" y="420" fill="#9ca3af" font-family="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" font-size="28">LLM apps • RAG • MLOps • Cloud • Backend</text>
</svg>`;

await fs.writeFile('og-image.svg', svg, 'utf8');
console.log('Generated og-image.svg');