import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'automation_logs');
fs.mkdirSync(outDir, { recursive: true });

const inputPath = process.env.SOURCE_LOG || path.join(outDir, 'runtime.log');
const latestPath = path.join(outDir, 'latest-error.log');

const extra = process.env.EXTRA_CONTEXT || '';

let data = '';
try { data = fs.readFileSync(inputPath, 'utf8'); } catch {}

const payload = `CapturedAt: ${new Date().toISOString()}\n\n${extra}\n\n${data}`;
fs.writeFileSync(latestPath, payload, 'utf8');
console.log('Captured error context to', latestPath);