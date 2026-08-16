#!/usr/bin/env node
/**
 * Cleans servicesData.json by:
 * 1. Removing entries with missing required fields (id, href, name, title, description, category, industry)
 * 2. Filling missing optional fields from available data (title from name, industry from category, href from id)
 * 3. Deduplicating by id (keeping first occurrence)
 * 4. Deduplicating by href (keeping first occurrence)
 */
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "app", "data", "servicesData.json");
const raw = JSON.parse(fs.readFileSync(filePath, "utf8"));
// Handle both array format and { services: [...] } wrapper format
let data = Array.isArray(raw) ? raw : (raw.services || raw.allServices || []);

console.log("Before:", data.length, "entries");

// --- Phase 1: Fill missing fields from available data ---
let filled = 0;
for (const svc of data) {
  // Fill title from name if missing
  if (!svc.title && svc.name) {
    svc.title = svc.name;
    filled++;
  }
  // Fill name from title if missing (reverse fallback)
  if (!svc.name && svc.title) {
    svc.name = svc.title;
    filled++;
  }
  // Fill href from id if missing
  if (!svc.href && svc.id) {
    svc.href = `/services/${svc.id}`;
    filled++;
  }
  // Fill industry from category if missing (use category as industry for known patterns)
  if (!svc.industry) {
    const catIndustryMap = {
      'ai': 'AI', 'it': 'IT', 'cloud': 'Cloud', 'security': 'Security',
      'data': 'Data Engineering', 'automation': 'Automation',
      'devops': 'DevOps', 'micro-saas': 'SaaS'
    };
    svc.industry = catIndustryMap[svc.category] || 'General';
    filled++;
  }
  // Fill category from href/ID patterns if missing
  if (!svc.category) {
    const slug = (svc.id || '').toLowerCase();
    if (slug.startsWith('ai-') || slug.includes('-ai')) svc.category = 'ai';
    else if (slug.startsWith('it-') || slug.includes('-it')) svc.category = 'it';
    else if (slug.includes('cloud')) svc.category = 'cloud';
    else if (slug.includes('security') || slug.includes('cyber')) svc.category = 'security';
    else if (slug.includes('data')) svc.category = 'data';
    else svc.category = 'ai';
    filled++;
  }
}
console.log("After filling missing fields:", data.length, "entries (", filled, "fields filled )");

// --- Phase 2: Filter out entries with truly missing required fields ---
const requiredFields = ["id", "name", "title", "description", "category", "industry"];
const valid = data.filter(s => requiredFields.every(f => s[f] && s[f] !== "undefined" && s[f] !== "null"));
console.log("After filtering invalid:", valid.length, "entries");
console.log("Removed:", data.length - valid.length, "invalid entries");

// --- Phase 3: Deduplicate by id (keeping first occurrence) ---
const seenIds = new Set();
const byId = [];
for (const s of valid) {
  if (!seenIds.has(s.id)) {
    seenIds.add(s.id);
    byId.push(s);
  }
}
console.log("After dedup by id:", byId.length, "entries");
console.log("Removed:", valid.length - byId.length, "duplicates by id");

// --- Phase 4: Deduplicate by href (keeping first occurrence) ---
// First fix missing hrefs from id
let missingHrefFixed = 0;
for (const s of byId) {
  if (!s.href) {
    s.href = `/services/${s.id}`;
    missingHrefFixed++;
  }
}
console.log("Fixed missing hrefs:", missingHrefFixed);

const seenHrefs = new Set();
const deduped = [];
for (const s of byId) {
  if (!seenHrefs.has(s.href)) {
    seenHrefs.add(s.href);
    deduped.push(s);
  }
}
console.log("After dedup by href:", deduped.length, "entries");
console.log("Removed:", byId.length - deduped.length, "duplicates by href");

// --- Phase 5: Sort by id for deterministic output ---
const sorted = deduped.sort((a, b) => (a.id || '').localeCompare(b.id || ''));

// --- Phase 6: Write back ---
fs.writeFileSync(filePath, JSON.stringify(sorted, null, 2));
console.log("Written:", filePath);

// --- Phase 7: Sync servicesData.ts from cleaned JSON ---
// The .ts file imports from .json, so no manual sync needed — but verify they match
console.log("\nSummary:");
console.log(`  Original entries: ${data.length}`);
console.log(`  Final entries: ${sorted.length}`);
console.log(`  Removed: ${data.length - sorted.length} invalid/duplicate entries`);
