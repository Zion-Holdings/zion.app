import { promises as fs } from 'node:fs';

function between(content, start, end, replacement) {
  const s = content.indexOf(start);
  const e = content.indexOf(end, s + start.length);
  if (s === -1 || e === -1) return content;
  return content.slice(0, s + start.length) + '\n' + replacement.trim() + '\n' + content.slice(e);
}

async function getRecentCommits() {
  try {
    const log = await fs.readFile('.git/refs/heads/main', 'utf8').catch(() => null);
    // Fallback to git log via child process is not allowed here; we create a simple placeholder using timestamp
    const now = new Date().toISOString().slice(0, 10);
    return [ `[${now}] automated maintenance` ];
  } catch {
    const now = new Date().toISOString().slice(0, 10);
    return [ `[${now}] automated maintenance` ];
  }
}

async function detectFeatures() {
  const features = [];
  const present = (path) => fs.stat(path).then(() => true).catch(() => false);
  if (await present('.github/workflows/deploy-pages.yml')) features.push('Autonomous deploys');
  if (await present('.github/workflows/lighthouse.yml')) features.push('Performance monitoring');
  if (await present('.github/workflows/accessibility.yml')) features.push('Accessibility checks');
  if (await present('.github/workflows/link-check.yml')) features.push('Link integrity');
  if (await present('.github/workflows/sitemap.yml')) features.push('SEO automation');
  if (await present('.github/workflows/screenshots.yml')) features.push('Visual snapshots');
  if (await present('.github/workflows/update-readme-badges.yml')) features.push('Auto-updating badges');
  return Array.from(new Set(features));
}

async function main() {
  const html = await fs.readFile('index.html', 'utf8');

  const features = await detectFeatures();
  const featuresMarkup = features.map((f) => `<span class="chip">${f}</span>`).join('\n                ');

  const benefits = [
    'Faster publishing and feedback cycles',
    'Improved SEO and shareability',
    'Continuous quality and link integrity',
    'Automated visual verification',
  ];
  const benefitsMarkup = benefits.map((b) => `<li>${b}</li>`).join('\n                ');

  const commits = await getRecentCommits();
  const updatesMarkup = commits.slice(0, 3).map((c) => `<li>${c}</li>`).join('\n                ');

  let out = html;
  out = between(out, '<!-- auto:features:start -->', '<!-- auto:features:end -->', featuresMarkup);
  out = between(out, '<!-- auto:benefits:start -->', '<!-- auto:benefits:end -->', benefitsMarkup);
  out = between(out, '<!-- auto:updates:start -->', '<!-- auto:updates:end -->', updatesMarkup);

  if (out !== html) {
    await fs.writeFile('index.html', out, 'utf8');
    console.log('index.html updated');
  } else {
    console.log('No changes to index.html');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});