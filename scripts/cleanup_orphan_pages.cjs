#!/usr/bin/env node
/**
 * Cleanup orphan sitemap page directories.
 *
 * Patterns:
 *   1. Hash-suffix duplicates (497): dirs like "01-ai-18799938", "4paradigm-f8412dd3"
 *      These are stale copies created by concurrent UFMGE writes. The canonical
 *      slug in the catalog has NO hash suffix. Delete these directories + remove
 *      their sitemap entries.
 *   2. Ampersand/page dir cleanup (2): dirs with & in name.
 *   3. Legitimate manual pages (5): hermes-agent, hermes-agent-training, etc.
 *      These are intentional hub pages — KEEP them.
 *
 * Usage: node cleanup_orphan_pages.cjs [--dry-run]
 */
const fs = require('fs');
const path = require('path');

const REPO = '/Users/klebergarciaalcatrao/zion-support.github.io';
const SERVICES_DIR = path.join(REPO, 'app/services');
const SITEMAP = path.join(REPO, 'public/sitemap.xml');
const CATALOG = path.join(REPO, 'app/data/services.json');
const OUTPUT = path.join(REPO, 'orphan_cleanup_report.json');

const dryRun = process.argv.includes('--dry-run');

function main() {
    const report = { timestamp: new Date().toISOString(), dry_run: dryRun, deletions: [], sitemap_removals: [], kept: [], summary: {} };

    // Load catalog slugs
    const data = JSON.parse(fs.readFileSync(CATALOG, 'utf8'));
    const catalogSlugs = new Set(data.map(s => s.id || s.slug));

    // Load sitemap content
    let sitemap = fs.readFileSync(SITEMAP, 'utf8');
    const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
    const sitemapServiceUrls = sitemapUrls.filter(u => u.includes('/services/') && u !== 'https://ziontechgroup.com/services/');
    const sitemapSlugs = new Set(sitemapServiceUrls.map(u => u.replace('https://ziontechgroup.com/services/', '').replace(/\/$/, '')));

    // Find orphans
    const orphans = [...sitemapSlugs].filter(s => !catalogSlugs.has(s));

    // Categorize
    const hashDupes = orphans.filter(s => /-[0-9a-f]{6,}$/.test(s));
    const ampVariants = orphans.filter(s => s.includes('&') && !hashDupes.includes(s));
    const other = orphans.filter(s => !hashDupes.includes(s) && !ampVariants.includes(s));

    // Hash suffix dupes → delete dirs + sitemap entries
    for (const slug of hashDupes) {
        const dirPath = path.join(SERVICES_DIR, slug);
        if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
            report.deletions.push({ type: 'hash_suffix_dupe', slug, dirPath });
            if (!dryRun) {
                fs.rmSync(dirPath, { recursive: true, force: true });
            }
        }
        report.sitemap_removals.push(`/services/${slug}/`);
    }

    // Ampersand variants → mark for review
    for (const slug of ampVariants) {
        const dirPath = path.join(SERVICES_DIR, slug);
        if (fs.existsSync(dirPath)) {
            report.deletions.push({ type: 'ampersand_variant', slug, dirPath });
            if (!dryRun) fs.rmSync(dirPath, { recursive: true, force: true });
        }
        report.sitemap_removals.push(`/services/${slug}/`);
    }

    // Update sitemap: remove orphan entries
    if (!dryRun && report.sitemap_removals.length > 0) {
        for (const slug of report.sitemap_removals) {
            const urlPattern = `https://ziontechgroup.com/services/${slug}/`;
            sitemap = sitemap.replace(new RegExp(`<url>\\s*<loc>${urlPattern}</loc>.*?</url>`, 'gs'), '');
        }
        fs.writeFileSync(SITEMAP, sitemap, 'utf8');
    }

    // Legitimate pages to keep
    for (const slug of other) {
        report.kept.push(slug);
    }

    report.summary = {
        catalog_slugs: catalogSlugs.size,
        sitemap_service_urls: sitemapServiceUrls.length,
        total_orphans: orphans.length,
        hash_suffix_dupes_deleted: hashDupes.length,
        ampersand_variants_deleted: ampVariants.length,
        legitimate_pages_kept: other.length,
        sitemap_entries_removed: report.sitemap_removals.length
    };

    fs.writeFileSync(OUTPUT, JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report.summary, null, 2));
}

main();
