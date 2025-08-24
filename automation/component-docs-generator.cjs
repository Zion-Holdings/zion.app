#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function walkDir(rootDir) {
  const files = [];
  const stack = [rootDir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { continue; }
    for (const e of entries) {
      const full = path.join(current, e.name);
      if (e.isDirectory()) {
        stack.push(full);
      } else if (/\.(tsx|ts|jsx|js)$/i.test(e.name)) {
        files.push(full);
      }
    }
  }
  return files;
}

function readFileSafe(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
}

function extractInterfaces(source) {
  const interfaces = {};
  // interface SomethingProps { ... }
  const ifaceRegex = /interface\s+([A-Za-z0-9_]+Props)\s*\{([\s\S]*?)\}/g;
  let m;
  while ((m = ifaceRegex.exec(source))) {
    const name = m[1];
    const body = m[2];
    const props = [];
    body.split(/\r?\n/).forEach((line) => {
      const mm = line.trim().match(/^([A-Za-z0-9_]+)\??\s*:\s*([^;]+)/);
      if (mm) props.push({ name: mm[1], type: mm[2].trim() });
    });
    interfaces[name] = props;
  }
  // type SomethingProps = { ... }
  const typeRegex = /type\s+([A-Za-z0-9_]+Props)\s*=\s*\{([\s\S]*?)\}/g;
  while ((m = typeRegex.exec(source))) {
    const name = m[1];
    const body = m[2];
    const props = [];
    body.split(/\r?\n/).forEach((line) => {
      const mm = line.trim().match(/^([A-Za-z0-9_]+)\??\s*:\s*([^;]+)/);
      if (mm) props.push({ name: mm[1], type: mm[2].trim() });
    });
    interfaces[name] = props;
  }
  return interfaces;
}

function extractComponents(filePath, source, interfaces) {
  const components = [];
  // export default function Name(props: SomethingProps)
  const defFnRegex = /export\s+default\s+function\s+([A-Za-z0-9_]+)\s*\(([^)]*)\)/g;
  let m;
  while ((m = defFnRegex.exec(source))) {
    const name = m[1];
    const params = m[2];
    const propsTypeMatch = params.match(/:\s*([A-Za-z0-9_]+Props)/);
    const propsType = propsTypeMatch ? propsTypeMatch[1] : null;
    const props = propsType && interfaces[propsType] ? interfaces[propsType] : [];
    components.push({ name, export: 'default', propsType, props, file: filePath });
  }
  // export function Name(props: SomethingProps)
  const expFnRegex = /export\s+function\s+([A-Za-z0-9_]+)\s*\(([^)]*)\)/g;
  while ((m = expFnRegex.exec(source))) {
    const name = m[1];
    const params = m[2];
    const propsTypeMatch = params.match(/:\s*([A-Za-z0-9_]+Props)/);
    const propsType = propsTypeMatch ? propsTypeMatch[1] : null;
    const props = propsType && interfaces[propsType] ? interfaces[propsType] : [];
    components.push({ name, export: 'named', propsType, props, file: filePath });
  }
  // const Name: React.FC<SomethingProps> = (props) =>
  const fcRegex = /const\s+([A-Za-z0-9_]+)\s*:\s*React\.FC\s*<\s*([A-Za-z0-9_]+Props)\s*>/g;
  while ((m = fcRegex.exec(source))) {
    const name = m[1];
    const propsType = m[2];
    const props = interfaces[propsType] || [];
    components.push({ name, export: 'const', propsType, props, file: filePath });
  }
  return components;
}

function toRouteFromFile(file) {
  // Only for components docs; we keep file path
  return file.replace(/^.*\/(components\/|pages\/)/, '$1');
}

(function main() {
  const workspaceRoot = path.resolve(__dirname, '..');
  const componentsDir = path.join(workspaceRoot, 'components');
  const outJson = path.join(workspaceRoot, 'public', 'automation', 'component-docs.json');
  const outMd = path.join(workspaceRoot, 'docs', 'reports', 'component-docs.md');

  let files = [];
  try { files = walkDir(componentsDir); } catch { files = []; }

  const allComponents = [];
  const errors = [];

  for (const f of files) {
    const source = readFileSafe(f);
    if (!source) continue;
    try {
      const interfaces = extractInterfaces(source);
      const comps = extractComponents(f, source, interfaces);
      comps.forEach((c) => c.relative = toRouteFromFile(f));
      if (comps.length) allComponents.push(...comps);
    } catch (e) {
      errors.push({ file: f, error: String(e) });
    }
  }

  const json = {
    generatedAt: new Date().toISOString(),
    totalComponents: allComponents.length,
    components: allComponents.map((c) => ({
      name: c.name,
      export: c.export,
      file: c.relative,
      propsType: c.propsType || null,
      props: c.props || []
    }))
  };

  // Ensure dirs exist
  fs.mkdirSync(path.dirname(outJson), { recursive: true });
  fs.mkdirSync(path.dirname(outMd), { recursive: true });

  fs.writeFileSync(outJson, JSON.stringify(json, null, 2));

  const mdLines = [];
  mdLines.push('# Component Docs Report');
  mdLines.push('');
  mdLines.push(`Generated at: ${json.generatedAt}`);
  mdLines.push('');
  mdLines.push(`Total components discovered: ${json.totalComponents}`);
  mdLines.push('');
  json.components.slice(0, 300).forEach((c) => {
    mdLines.push(`## ${c.name}`);
    mdLines.push('');
    mdLines.push(`File: \`${c.file}\``);
    mdLines.push('');
    if (c.props && c.props.length) {
      mdLines.push('| Prop | Type |');
      mdLines.push('| --- | --- |');
      c.props.forEach((p) => mdLines.push(`| ${p.name} | ${p.type} |`));
      mdLines.push('');
    } else {
      mdLines.push('_No explicit props detected_');
      mdLines.push('');
    }
  });
  fs.writeFileSync(outMd, mdLines.join('\n'));

  console.log(`Wrote ${outJson} and ${outMd}`);
})();