import path from 'path';
import fs from 'fs';
import http from 'http';
import { spawn } from 'child_process';

async function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: 'inherit', ...opts });
    p.on('exit', (code) => (code === 0 ? resolve(undefined) : reject(new Error(`${cmd} exited ${code}`))));
  });
}

async function exportSite() {
  await run('npm', ['run', 'build']);
  await run('npx', ['next', 'export']);
}

async function generatePdf() {
  const puppeteer = (await import('puppeteer')).default;
  const server = http.createServer((req, res) => {
    const filePath = path.join(process.cwd(), 'out', req.url === '/' ? '/index.html' : req.url);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fs.readFileSync(filePath));
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  });
  await new Promise((r) => server.listen(5055, r));

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:5055/zion-book.html', { waitUntil: 'networkidle0' });
  const outDir = path.join(process.cwd(), 'dist');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  await page.pdf({ path: path.join(outDir, 'zion-os-book.pdf'), format: 'Letter', printBackground: true, margin: { top: '0.75in', bottom: '0.75in', left: '0.75in', right: '0.75in' } });
  await browser.close();
  server.close();
}

(async () => {
  await exportSite();
  await generatePdf();
  console.log('PDF exported to dist/zion-os-book.pdf');
})();