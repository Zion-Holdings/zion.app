const fs = require('fs');
const path = require('path');

function safeRead(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    return '';
  }
}

function writeJson(targetPath, data) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, JSON.stringify(data, null, 2));
}

function writeText(targetPath, text) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, text);
}

function summarizeMarkdown(md, limit = 10) {
  const lines = md.split('\n').filter(Boolean);
  const bullets = lines.filter(l => /^[-*]|^\d+\./.test(l)).slice(0, limit);
  const headings = lines.filter(l => /^#{1,4}\s/.test(l)).slice(0, 6);
  return { bullets, headings };
}

function extractTopIdeas(ideasJson) {
  try {
    const data = JSON.parse(ideasJson);
    if (Array.isArray(data)) return data.slice(0, 10);
    if (Array.isArray(data?.ideas)) return data.ideas.slice(0, 10);
  } catch (e) {}
  return [];
}

function loadKnowledgeGraph(graphJson) {
  try {
    return JSON.parse(graphJson);
  } catch (e) {
    return {};
  }
}

function generateRoadmapDoc(ctx) {
  const now = new Date().toISOString();
  const lines = [];
  lines.push(`# Autonomous Roadmap (Auto‑Generated)`);
  lines.push('');
  lines.push(`Generated at: ${now}`);
  lines.push('');
  if (ctx.todoSummary.bullets.length) {
    lines.push('## Priority TODOs');
    lines.push(...ctx.todoSummary.bullets.map(b => `- ${b.replace(/^[-*]\s?/, '')}`));
    lines.push('');
  }
  if (ctx.todoSummary.headings.length) {
    lines.push('## TODO Headings');
    lines.push(...ctx.todoSummary.headings);
    lines.push('');
  }
  if (ctx.topIdeas.length) {
    lines.push('## Revenue/Marketing Ideas');
    for (const i of ctx.topIdeas) {
      if (typeof i === 'string') {
        lines.push(`- ${i}`);
      } else if (i && typeof i === 'object') {
        const title = i.title || i.name || i.id || 'Idea';
        const desc = i.description || i.desc || '';
        lines.push(`- ${title}${desc ? ` — ${desc}` : ''}`);
      }
    }
    lines.push('');
  }
  if (ctx.knowledgeGraph && Object.keys(ctx.knowledgeGraph).length) {
    lines.push('## Knowledge Graph Snapshot');
    const keys = Object.keys(ctx.knowledgeGraph).slice(0, 20);
    lines.push(`Nodes: ${keys.length > 0 ? keys.length : 'N/A'} (showing up to 20 keys)`);
    for (const k of keys) {
      lines.push(`- ${k}`);
    }
    lines.push('');
  }
  lines.push('---');
  lines.push('This roadmap is maintained autonomously and updated on a frequent schedule.');
  return lines.join('\n');
}

function main() {
  const todoPath = path.resolve(process.cwd(), 'docs', 'TODO_REPORT.md');
  const ideasPath = path.resolve(process.cwd(), 'data', 'reports', 'revenue-ideas', 'revenue-ideas-actions.json');
  const graphPath = path.resolve(process.cwd(), 'data', 'reports', 'repo-knowledge-graph.json');

  const todoMd = safeRead(todoPath);
  const ideasJson = safeRead(ideasPath);
  const graphJson = safeRead(graphPath);

  const ctx = {
    todoSummary: summarizeMarkdown(todoMd, 12),
    topIdeas: extractTopIdeas(ideasJson),
    knowledgeGraph: loadKnowledgeGraph(graphJson),
  };

  const roadmap = generateRoadmapDoc(ctx);
  const roadmapMdPath = path.resolve(process.cwd(), 'docs', 'ROADMAP_AUTO.md');
  writeText(roadmapMdPath, roadmap);

  const publicJsonPath = path.resolve(process.cwd(), 'public', 'automation', 'roadmap.json');
  writeJson(publicJsonPath, { generatedAt: new Date().toISOString(), ...ctx });

  console.log('Roadmap synthesized:', { roadmapMdPath, publicJsonPath });
}

if (require.main === module) {
  try {
    main();
    process.exit(0);
  } catch (e) {
    console.error('roadmap-synthesizer failed:', e);
    process.exit(0);
  }
}