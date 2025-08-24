const fs = require('fs');
const path = require('path');

(function main() {
  const root = path.resolve(__dirname, '..');
  const pkgPath = path.join(root, 'package.json');
  const readmePath = path.join(root, 'README.md');

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const repo = (pkg.repository && pkg.repository.url) ? pkg.repository.url.replace(/^git\+|\.git$/g, '') : '';
  const repoSlug = 'Zion-Holdings/zion.app';
  const nodeVersion = (pkg.engines && pkg.engines.node) ? pkg.engines.node.replace(/^>=\s*/, '') : '20';

  const badges = [
    `[![Netlify Status](https://img.shields.io/badge/deploy-Netlify-success?logo=netlify)](https://app.netlify.com/)`,
    `[![Node Version](https://img.shields.io/badge/node-${encodeURIComponent(nodeVersion)}-green?logo=node.js)](#)`,
    `[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)`,
    `[![Repo Size](https://img.shields.io/github/repo-size/${repoSlug})](https://github.com/${repoSlug})`,
    `[![Issues](https://img.shields.io/github/issues/${repoSlug})](https://github.com/${repoSlug}/issues)`
  ];

  let readme = '';
  try { readme = fs.readFileSync(readmePath, 'utf8'); } catch { readme = '# Zion\n'; }

  if (!readme.includes('<!-- BADGES:START -->')) {
    const headerEnd = readme.indexOf('\n');
    const prefix = headerEnd >= 0 ? readme.slice(0, headerEnd + 1) : readme + '\n';
    const suffix = headerEnd >= 0 ? readme.slice(headerEnd + 1) : '';
    readme = [
      prefix,
      '<!-- BADGES:START -->',
      badges.join(' '),
      '<!-- BADGES:END -->',
      '',
      suffix
    ].join('\n');
  } else {
    readme = readme.replace(/<!-- BADGES:START -->[\s\S]*?<!-- BADGES:END -->/, [
      '<!-- BADGES:START -->',
      badges.join(' '),
      '<!-- BADGES:END -->'
    ].join('\n'));
  }

  fs.writeFileSync(readmePath, readme);
})();