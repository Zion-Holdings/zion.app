const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    return '';
  }
}

function extractInterfacesAndTypes(source) {
  const results = [];

  const interfaceRegex = /export\s+interface\s+(\w+)\s*\{([\s\S]*?)\}/g;
  let match;
  while ((match = interfaceRegex.exec(source)) !== null) {
    results.push({ kind: 'interface', name: match[1], body: match[2] });
  }

  const typeRegex = /export\s+type\s+(\w+)\s*=\s*\{([\s\S]*?)\};?/g;
  while ((match = typeRegex.exec(source)) !== null) {
    results.push({ kind: 'type', name: match[1], body: match[2] });
  }

  return results;
}

function parseProps(body) {
  const lines = body.split('\n');
  const props = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || line.startsWith('//')) continue;
    // Capture optional trailing comma/semicolon
    const propMatch = /^(\w+)\??:\s*([^;]+?)[;,]?$/.exec(line);
    if (propMatch) {
      // look for preceding comment lines
      const comments = [];
      for (let j = i - 1; j >= 0; j--) {
        const prev = lines[j].trim();
        if (prev.startsWith('//')) {
          comments.unshift(prev.replace(/^\/\//, '').trim());
        } else if (prev === '' || prev === '}' || prev === '{') {
          continue;
        } else {
          break;
        }
      }
      props.push({ name: propMatch[1], type: propMatch[2].trim(), description: comments.join(' ') });
    }
  }
  return props;
}

function generateDocsForFile(filePath) {
  const source = readFileSafe(filePath);
  const defs = extractInterfacesAndTypes(source).filter(d => /Props$/i.test(d.name) || d.name === 'Props');
  const docs = [];
  for (const def of defs) {
    const props = parseProps(def.body);
    if (props.length > 0) {
      docs.push({ definitionName: def.name, props });
    }
  }
  return docs;
}

function main() {
  const componentsDir = path.resolve(__dirname, '..', 'components');
  const outputMarkdown = path.resolve(__dirname, '..', 'docs', 'components-props.md');
  const outputJson = path.resolve(__dirname, '..', 'public', 'components-props.json');

  const pattern = path.join(componentsDir, '**', '*.{ts,tsx,js,jsx}');
  const files = glob.sync(pattern, { nodir: true });

  const summary = [];

  for (const file of files) {
    const rel = path.relative(path.resolve(__dirname, '..'), file);
    const base = path.basename(file);
    const componentName = base.replace(/\.(tsx?|jsx?)$/, '');
    const docs = generateDocsForFile(file);
    if (docs.length > 0) {
      summary.push({ file: rel, component: componentName, docs });
    }
  }

  // Write JSON
  fs.ensureDirSync(path.dirname(outputJson));
  fs.writeFileSync(outputJson, JSON.stringify({ generatedAt: new Date().toISOString(), items: summary }, null, 2));

  // Write Markdown
  const mdParts = [];
  mdParts.push('# Component Props Documentation');
  mdParts.push('');
  mdParts.push(`Generated at ${new Date().toISOString()}`);
  mdParts.push('');
  for (const item of summary) {
    mdParts.push(`## ${item.component}`);
    mdParts.push(`File: \
${item.file}`);
    for (const def of item.docs) {
      mdParts.push('');
      mdParts.push(`### ${def.definitionName}`);
      mdParts.push('');
      if (def.props.length === 0) {
        mdParts.push('_No props detected_');
      } else {
        for (const p of def.props) {
          const desc = p.description ? ` — ${p.description}` : '';
          mdParts.push(`- ${p.name}: \
${p.type}${desc}`);
        }
      }
      mdParts.push('');
    }
    mdParts.push('');
  }
  fs.ensureDirSync(path.dirname(outputMarkdown));
  fs.writeFileSync(outputMarkdown, mdParts.join('\n'));

  console.log(`Wrote ${outputJson}`);
  console.log(`Wrote ${outputMarkdown}`);
}

if (require.main === module) {
  try {
    main();
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}