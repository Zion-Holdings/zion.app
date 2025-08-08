#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class AppIntelligenceEnhancer {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.sourceDirs = ['pages', 'components', 'utils', 'hooks'];
    this.reportDir = path.join(this.projectRoot, 'data', 'reports', 'intelligence');
    this.logFile = path.join(__dirname, 'logs', 'app-intelligence-enhancer.log');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
    if (!fs.existsSync(this.reportDir)) fs.mkdirSync(this.reportDir, { recursive: true });
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const line = `[${timestamp}] ${message}`;
    console.log(line);
    try { fs.appendFileSync(this.logFile, line + '\n'); } catch {}
  }

  listSourceFiles() {
    const files = [];
    for (const dir of this.sourceDirs) {
      const abs = path.join(this.projectRoot, dir);
      if (!fs.existsSync(abs)) continue;
      this.walk(abs, files);
    }
    return files;
  }

  walk(dir, out) {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
        this.walk(full, out);
      } else if (/\.(tsx?|jsx?)$/i.test(entry.name)) {
        out.push(full);
      }
    }
  }

  analyzeFile(filePath) {
    let content = '';
    try { content = fs.readFileSync(filePath, 'utf8'); } catch { return null; }
    const rel = filePath.replace(this.projectRoot + path.sep, '');

    // Simple heuristics
    const lines = content.split('\n');
    const numLines = lines.length;
    const hasAny = /\bany\b/.test(content);
    const defaultExport = /export\s+default\s+/.test(content);
    const namedExports = (content.match(/export\s+(const|function|class|type|interface)\s+/g) || []).length;
    const importMatches = Array.from(content.matchAll(/import\s+[^'";]+from\s+['"]([^'"]+)['"]/g)).map(m => m[1]);
    const usesUseEffect = /useEffect\s*\(/.test(content);
    const hasEmptyDeps = /useEffect\s*\([^)]*,\s*\[\s*\]\s*\)/.test(content);

    const edges = importMatches
      .filter(p => p.startsWith('.') || p.startsWith('..'))
      .map(p => this.resolveImportToRel(filePath, p))
      .filter(Boolean);

    const issues = [];
    if (numLines > 500) issues.push({ type: 'file-too-long', severity: 'medium', detail: `Lines=${numLines}` });
    if (hasAny) issues.push({ type: 'any-type', severity: 'medium' });
    if (!defaultExport && namedExports === 0) issues.push({ type: 'no-exports', severity: 'low' });
    if (usesUseEffect && hasEmptyDeps) issues.push({ type: 'useEffect-empty-deps', severity: 'low' });

    return {
      file: rel,
      metrics: { numLines, namedExports, defaultExport, importCount: importMatches.length },
      edges,
      issues,
    };
  }

  resolveImportToRel(fromFile, importPath) {
    const fromDir = path.dirname(fromFile);
    const candidates = [
      `${importPath}.ts`,
      `${importPath}.tsx`,
      `${importPath}.js`,
      `${importPath}.jsx`,
      path.join(importPath, 'index.ts'),
      path.join(importPath, 'index.tsx'),
      path.join(importPath, 'index.js'),
      path.join(importPath, 'index.jsx'),
    ];
    for (const cand of candidates) {
      const abs = path.resolve(fromDir, cand);
      if (fs.existsSync(abs)) {
        return abs.replace(this.projectRoot + path.sep, '');
      }
    }
    return null;
  }

  buildGraph(files) {
    const nodes = [];
    const edges = [];
    const fileAnalyses = [];

    for (const file of files) {
      const analysis = this.analyzeFile(file);
      if (!analysis) continue;
      fileAnalyses.push(analysis);
      nodes.push({ id: analysis.file, type: 'file', ...analysis.metrics });
      for (const to of analysis.edges) {
        edges.push({ from: analysis.file, to });
      }
    }

    return { nodes, edges, fileAnalyses };
  }

  generateRecommendations(fileAnalyses) {
    const recs = [];
    for (const a of fileAnalyses) {
      for (const issue of a.issues) {
        switch (issue.type) {
          case 'file-too-long':
            recs.push({ file: a.file, action: 'split-module', note: 'Consider breaking into smaller components/hooks.' });
            break;
          case 'any-type':
            recs.push({ file: a.file, action: 'add-types', note: 'Replace any with specific types or generics.' });
            break;
          case 'no-exports':
            recs.push({ file: a.file, action: 'export-symbols', note: 'Ensure module exports are intentional.' });
            break;
          case 'useEffect-empty-deps':
            recs.push({ file: a.file, action: 'review-effects', note: 'Empty dependency array may be incorrect; review dependencies.' });
            break;
          default:
            break;
        }
      }
    }
    return recs;
  }

  writeReports(graph, recommendations) {
    const out = {
      timestamp: new Date().toISOString(),
      summary: {
        files: graph.nodes.length,
        edges: graph.edges.length,
        recommendations: recommendations.length,
      },
      recommendations,
      graph,
    };
    const jsonPath = path.join(this.reportDir, 'intelligence-report.json');
    fs.writeFileSync(jsonPath, JSON.stringify(out, null, 2));

    // Simple markdown summary
    const mdPath = path.join(this.reportDir, 'intelligence-summary.md');
    const md = [
      `# App Intelligence Summary`,
      ``,
      `- Generated: ${out.timestamp}`,
      `- Files analyzed: ${out.summary.files}`,
      `- Dependencies mapped: ${out.summary.edges}`,
      `- Recommendations: ${out.summary.recommendations}`,
      ``,
      `## Top Recommendations`,
      ...recommendations.slice(0, 20).map(r => `- ${r.file}: ${r.action} — ${r.note}`),
    ].join('\n');
    fs.writeFileSync(mdPath, md);

    this.log(`Reports written: ${jsonPath}, ${mdPath}`);
  }

  async analyzeOnce() {
    this.log('Starting app intelligence analysis...');
    const files = this.listSourceFiles();
    const graph = this.buildGraph(files);
    const recs = this.generateRecommendations(graph.fileAnalyses);
    this.writeReports(graph, recs);
    this.log('App intelligence analysis complete.');
  }

  async startContinuous() {
    await this.analyzeOnce();
    this.log('Starting continuous watch mode...');
    const watchDirs = this.sourceDirs
      .map(d => path.join(this.projectRoot, d))
      .filter(p => fs.existsSync(p));

    for (const dir of watchDirs) {
      try {
        fs.watch(dir, { recursive: true }, (eventType, filename) => {
          if (!filename) return;
          if (!/\.(tsx?|jsx?)$/i.test(filename)) return;
          this.log(`Change detected in ${path.join(dir, filename)} — re-analyzing in 2s...`);
          clearTimeout(this._debounceTimer);
          this._debounceTimer = setTimeout(() => this.analyzeOnce(), 2000);
        });
      } catch (e) {
        this.log(`Watcher error for ${dir}: ${e.message}`);
      }
    }
  }
}

async function main() {
  const enhancer = new AppIntelligenceEnhancer();
  const arg = process.argv[2];
  if (arg === 'continuous' || arg === 'watch' || arg === '--watch') {
    await enhancer.startContinuous();
  } else {
    await enhancer.analyzeOnce();
  }
}

if (require.main === module) {
  main().catch((e) => {
    console.error(e);
    process.exitCode = 1;
  });
}