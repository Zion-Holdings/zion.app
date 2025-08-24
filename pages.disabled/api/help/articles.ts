import fs from 'fs';
import path from 'path';

interface Req { method?: string; query?: { q?: string } }
interface JsonRes { status: (code: number) => JsonRes; json: (data: any) => void; end: () => void; }

export default function handler(req: Req, res: JsonRes) {
  if (req.method !== 'GET') { res.status(405).end(); return; }
  const search = (req.query?.q || '').toLowerCase();
  // Avoid TypeScript complaints about process.cwd() in environments where Node
  // types are not available by falling back to '.' if the function is missing.
  const cwd = (process as any).cwd ? (process as any).cwd() : '.';
  const dir = path.join(cwd, 'docs/help');
  const files = fs.readdirSync(dir);
  const articles = files.filter(f => f.endsWith('.md')).map(f => {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    const slug = f.replace(/\.md$/, '');
    const titleMatch = content.match(/^#\s+(.*)/);
    const title = titleMatch ? titleMatch[1] : slug;
    return { slug, title, content };
  });
  const filtered = search
    ? articles.filter(a => a.title.toLowerCase().includes(search) || a.content.toLowerCase().includes(search))
    : articles;
  res.status(200).json(filtered);
}
