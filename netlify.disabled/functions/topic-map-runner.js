const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const glob = require('glob');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return '';
  }
}

function tokenize(text) {
  const stop = new Set([
    'the','a','an','and','or','of','to','in','on','for','by','with','is','are','be','as','at','it','this','that','from','we','you','our','your','their','was','were','but','not','can','will','all','any','more','most','some','such','no','nor','too','very','into','than','then','so','if','via','about','over','under','out','per','up','down'
  ]);
  return (text || '')
    .toLowerCase()
    .replace(/[^A-Za-z0-9\s-]+/g, ' ')
    .split(/\s+/)
    .filter(w => w && w.length >= 3 && !stop.has(w));
}

function extractHeadingsFromTsx(source) {
  const headings = [];
  const regex = /<h([1-3])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let match;
  while ((match = regex.exec(source)) !== null) {
    const inner = match[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (inner) headings.push(inner);
  }
  return headings;
}

function extractHeadingsFromMarkdown(source) {
  const lines = (source || '').split(/\r?\n/);
  const headings = [];
  for (const line of lines) {
    const m = /^(#{1,3})\s+(.+)$/.exec(line.trim());
    if (m) headings.push(m[2].trim());
  }
  return headings;
}

function buildTopicMap(rootDir) {
  const pages = glob.sync('pages/**/*.tsx', { cwd: rootDir, nodir: true, ignore: ['**/_*.tsx', '**/api/**'] });
  const docs = glob.sync('docs/**/*.{md,mdx}', { cwd: rootDir, nodir: true });

  const topicToCount = new Map();
  const edgeToWeight = new Map();
  let filesProcessed = 0;

  function addTopics(topics) {
    const unique = Array.from(new Set(topics));
    for (const t of unique) {
      topicToCount.set(t, (topicToCount.get(t) || 0) + 1);
    }
    // co-occurrence graph
    for (let i = 0; i < unique.length; i++) {
      for (let j = i + 1; j < unique.length; j++) {
        const a = unique[i];
        const b = unique[j];
        const key = a < b ? `${a}__${b}` : `${b}__${a}`;
        edgeToWeight.set(key, (edgeToWeight.get(key) || 0) + 1);
      }
    }
  }

  for (const rel of pages) {
    const abs = path.join(rootDir, rel);
    const src = readFileSafe(abs);
    const headings = extractHeadingsFromTsx(src);
    const tokens = tokenize(headings.join(' '));
    if (tokens.length) {
      addTopics(tokens);
    }
    filesProcessed++;
  }

  for (const rel of docs) {
    const abs = path.join(rootDir, rel);
    const src = readFileSafe(abs);
    const headings = extractHeadingsFromMarkdown(src);
    const tokens = tokenize(headings.join(' '));
    if (tokens.length) {
      addTopics(tokens);
    }
    filesProcessed++;
  }

  // Build arrays
  const topics = Array.from(topicToCount.entries())
    .map(([id, count]) => ({ id, label: id, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 500);

  const topicSet = new Set(topics.map(t => t.id));
  const edges = Array.from(edgeToWeight.entries())
    .map(([key, weight]) => {
      const [a, b] = key.split('__');
      return { source: a, target: b, weight };
    })
    .filter(e => topicSet.has(e.source) && topicSet.has(e.target))
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 2000);

  return {
    generatedAt: new Date().toISOString(),
    totals: { files: filesProcessed, topics: topics.length, edges: edges.length },
    topics,
    edges
  };
}

function runGitSync(rootDir) {
  const abs = path.join(rootDir, 'automation', 'advanced-git-sync.cjs');
  const res = spawnSync('node', [abs], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = { schedule: '*/10 * * * *' };

exports.handler = async () => {
  try {
    const root = path.resolve(__dirname, '..', '..');
    const outDir = path.join(root, 'public', 'automation');
    ensureDir(outDir);

    const map = buildTopicMap(root);
    const outPath = path.join(outDir, 'topic-map.json');
    fs.writeFileSync(outPath, JSON.stringify(map, null, 2), 'utf8');

    const sync = runGitSync(root);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true, wrote: path.relative(root, outPath), totals: map.totals, git: { status: sync.status } })
    };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};