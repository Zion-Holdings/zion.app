#!/usr/bin/env node

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const ROOT = process.cwd();
const SUBMISSIONS_DIR = path.join(ROOT, 'data', 'talent-submissions');
const SUBMISSIONS_AGG = path.join(ROOT, 'data', 'talent-submissions.json');
const OUTPUT_PROFILES = path.join(ROOT, 'data', 'talent-profiles.json');
const PUBLIC_TALENT_INDEX = path.join(ROOT, 'public', 'talent', 'index.json');
const PUBLIC_TALENT_TAGS = path.join(ROOT, 'public', 'talent', 'tags.json');

function toKebabCase(str) {
  return (str || '')
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function uniqueArray(values) {
  return Array.from(new Set(values.filter(Boolean)));
}

function parseLinks(raw) {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  return raw
    .split(/[,\n\s]+/)
    .map((s) => s.trim())
    .filter((s) => /https?:\/\//i.test(s));
}

function scoreProfile(p) {
  let score = 0;
  if (p.yearsOfExperience && p.yearsOfExperience > 0) score += Math.min(10, p.yearsOfExperience);
  if (p.ai && p.ai.summary) score += 10;
  if (p.tags && p.tags.length) score += Math.min(15, p.tags.length);
  if (p.availability) score += 5;
  if (p.hourlyRate) score += 2;
  if (p.portfolioLinks && p.portfolioLinks.length) score += 5;
  if (p.assets && (p.assets.profileImage || p.assets.cv)) score += 3;
  return score;
}

function collectSubmissions() {
  const records = [];

  if (fs.existsSync(SUBMISSIONS_AGG)) {
    try {
      const agg = fse.readJSONSync(SUBMISSIONS_AGG);
      if (Array.isArray(agg)) records.push(...agg);
    } catch (_) {
      // ignore
    }
  }

  if (fs.existsSync(SUBMISSIONS_DIR)) {
    const files = fs.readdirSync(SUBMISSIONS_DIR).filter((f) => f.endsWith('.json'));
    for (const file of files) {
      try {
        const rec = fse.readJSONSync(path.join(SUBMISSIONS_DIR, file));
        records.push(rec);
      } catch (_) {
        // ignore
      }
    }
  }

  // Deduplicate by id, keep most recent createdAt
  const map = new Map();
  for (const rec of records) {
    if (!rec || !rec.id) continue;
    const existing = map.get(rec.id);
    if (!existing) map.set(rec.id, rec);
    else {
      const a = new Date(existing.createdAt || 0).getTime();
      const b = new Date(rec.createdAt || 0).getTime();
      map.set(rec.id, b >= a ? rec : existing);
    }
  }
  return Array.from(map.values());
}

async function maybeEnrichWithOpenAI(profile) {
  const apiKey = process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ZION;
  if (!apiKey) return profile; // no-op

  // Only enrich if missing summary or tags
  const needsSummary = !(profile.ai && profile.ai.summary);
  const needsTags = !(profile.ai && Array.isArray(profile.ai.tags) && profile.ai.tags.length);
  if (!needsSummary && !needsTags) return profile;

  try {
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });
    const text = [
      profile.professionalTitle,
      profile.bio,
      profile.projects || '',
      Array.isArray(profile.tags) ? profile.tags.join(', ') : '',
      profile.tools || '',
    ].join('\n');

    const prompt = `Extract JSON with keys: summary (<= 70 words), tags (8-20 lowercase concise tags).\nTEXT:\n${text}`;
    const res = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are an expert technical sourcer.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.3,
    });
    const content = res.choices?.[0]?.message?.content || '';
    let parsed;
    try { parsed = JSON.parse(content); } catch (_) { parsed = null; }
    if (parsed && typeof parsed.summary === 'string' && Array.isArray(parsed.tags)) {
      profile.ai = profile.ai || {};
      if (needsSummary) profile.ai.summary = parsed.summary;
      const newTags = parsed.tags.map((t) => String(t).toLowerCase().trim());
      profile.ai.tags = uniqueArray([...(profile.ai.tags || []), ...newTags]);
    }
  } catch (_) {
    // best effort
  }
  return profile;
}

async function main() {
  const submissions = collectSubmissions();
  await fse.ensureDir(path.dirname(PUBLIC_TALENT_INDEX));

  const profiles = [];
  const tagFrequency = new Map();

  for (const rec of submissions) {
    const fullName = rec.fullName || rec.name || 'Anonymous';
    const slugBase = `${toKebabCase(fullName)}-${(rec.id || '').slice(0, 8)}`.replace(/-+$/g, '');
    const profile = {
      id: rec.id,
      slug: slugBase || rec.id,
      createdAt: rec.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      fullName,
      professionalTitle: rec.professionalTitle || '',
      bio: rec.bio || '',
      projects: rec.projects || '',
      yearsOfExperience: Number(rec.yearsOfExperience) || 0,
      skills: rec.skills || '',
      tools: rec.tools || '',
      availability: rec.availability || '',
      timezone: rec.timezone || '',
      hourlyRate: rec.hourlyRate || null,
      portfolioLinks: parseLinks(rec.portfolioLinks),
      assets: rec.assets || { profileImage: null, cv: null },
      ai: rec.ai || {},
      tags: uniqueArray(
        String(rec.skills || '')
          .split(/[,\n]/)
          .map((s) => s.trim().toLowerCase())
          .filter(Boolean)
      ),
    };

    // Merge AI tags if present
    if (profile.ai && Array.isArray(profile.ai.tags)) {
      profile.tags = uniqueArray([...(profile.tags || []), ...profile.ai.tags.map((t) => String(t).toLowerCase())]);
    }

    await maybeEnrichWithOpenAI(profile);

    // Recompute tag frequency
    for (const tag of profile.tags || []) {
      tagFrequency.set(tag, (tagFrequency.get(tag) || 0) + 1);
    }

    profile.score = scoreProfile(profile);
    profiles.push(profile);
  }

  // Sort by score desc, then recency
  profiles.sort((a, b) => {
    if ((b.score || 0) !== (a.score || 0)) return (b.score || 0) - (a.score || 0);
    return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
  });

  const tagsOutput = Array.from(tagFrequency.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => ({ tag, count }));

  await fse.writeJSON(OUTPUT_PROFILES, profiles, { spaces: 2 });
  await fse.writeJSON(PUBLIC_TALENT_INDEX, profiles.map((p) => ({
    id: p.id,
    slug: p.slug,
    name: p.fullName,
    title: p.professionalTitle,
    availability: p.availability,
    years: p.yearsOfExperience,
    timezone: p.timezone,
    hourlyRate: p.hourlyRate,
    tags: p.tags,
    summary: p.ai?.summary || '',
    image: p.assets?.profileImage || null,
    score: p.score,
  })), { spaces: 2 });
  await fse.writeJSON(PUBLIC_TALENT_TAGS, tagsOutput, { spaces: 2 });

  console.log(`Talent profiles generated: ${profiles.length}`);
  console.log(`Top tags: ${tagsOutput.slice(0, 10).map((t) => `${t.tag}(${t.count})`).join(', ')}`);
}

main().catch((err) => {
  console.error('Talent optimizer failed', err);
  process.exit(1);
});