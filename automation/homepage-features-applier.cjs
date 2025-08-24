#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const DATA = path.join(__dirname, '..', 'data', 'reports', 'homepage', 'homepage-features-latest.json');
const HOMEPAGE = path.join(__dirname, '..', 'pages', 'index.tsx');

const START_MARK = '{/* AUTO-GENERATED: HOMEPAGE_FEATURES_START */}';
const END_MARK = '{/* AUTO-GENERATED: HOMEPAGE_FEATURES_END */}';

function readJson(p){ try { return JSON.parse(fs.readFileSync(p,'utf8')); } catch { return null; } }

function ensureMarkers(src){
  if (src.includes(START_MARK) && src.includes(END_MARK)) return src;
  const insertAt = src.lastIndexOf('</main>');
  if (insertAt === -1) return src;
  const block = `\n        ${START_MARK}\n        ${END_MARK}\n`;
  return src.slice(0, insertAt) + block + src.slice(insertAt);
}

function escapeHtml(s){ return String(s || '').replace(/`/g,'\u0060'); }

function buildSection(data){
  const features = (data.features || []).map(f => ({ title: f.title, desc: f.description || '' }));
  const benefits = (data.benefits || []).flatMap(b => b.items || []).slice(0, 6);

  const featureCards = features.map(f => `
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition">
              <h3 className="text-lg font-semibold mb-2">${escapeHtml(f.title)}</h3>
              <p className="text-white/80">${escapeHtml(f.desc)}</p>
            </div>`).join('\n');

  const benefitItems = benefits.map(b => `
              <li className="flex items-start gap-2"><span className="text-cyan-300">✓</span><span><strong>${escapeHtml(b.name)}</strong>: ${escapeHtml(b.blurb)}</span></li>`).join('\n');

  return `\n        ${START_MARK}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">\n${featureCards}\n          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-3">Why Choose Us</h2>
          <ul className="space-y-2">\n${benefitItems}\n          </ul>
        </section>
        ${END_MARK}`;
}

function apply(){
  if (!fs.existsSync(HOMEPAGE)) { console.log('Homepage not found'); return false; }
  const data = readJson(DATA);
  if (!data) { console.log('No homepage data'); return false; }
  const src = fs.readFileSync(HOMEPAGE, 'utf8');
  const withMarkers = ensureMarkers(src);
  const section = buildSection(data);
  let next = withMarkers;
  if (withMarkers.includes(START_MARK) && withMarkers.includes(END_MARK)){
    const start = withMarkers.indexOf(START_MARK);
    const end = withMarkers.indexOf(END_MARK) + END_MARK.length;
    next = withMarkers.slice(0, start) + section + withMarkers.slice(end);
  }
  if (next !== src) {
    fs.writeFileSync(HOMEPAGE, next, 'utf8');
    console.log('Homepage features applied.');
    return true;
  }
  console.log('No homepage feature changes needed.');
  return false;
}

apply();