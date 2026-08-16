#!/usr/bin/env node
/**
 * generate_sitemap_from_public.cjs
 * 
 * Regenerates sitemap.xml from ACTUAL built HTML pages in public/,
 * NOT from the servicesData.json catalog.
 * 
 * This prevents the bug where sitemap.xml lists 40K+ service URLs
 * that don't have corresponding HTML pages (causing SEO penalties).
 * 
 * - Scans public/ recursively for index.html files
 * - Includes trailing slashes in all URLs
 * - Preserves non-service URLs (about, blog, tools, etc.)
 * - Only includes /services/<id>/ URLs that have actual HTML pages
 * - Adds appropriate changefreq and priority
 */
const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.SITE_URL || 'https://ziontechgroup.com';
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const SITEMAP_FILE = path.join(process.cwd(), 'sitemap.xml');

const today = new Date().toISOString().split('T')[0];

function collectUrls(dir, basePath) {
    const urls = [];
    if (!fs.existsSync(dir)) return urls;

    function walk(currentDir, currentPath) {
        let entries;
        try {
            entries = fs.readdirSync(currentDir, { withFileTypes: true });
        } catch (e) {
            return;
        }

        for (const entry of entries) {
            const fullPath = path.join(currentDir, entry.name);
            const urlPath = currentPath + entry.name;

            if (entry.isDirectory()) {
                if (entry.name === 'stage') continue; // skip service stage pages
                // Check if this directory has an index.html
                const indexPath = path.join(fullPath, 'index.html');
                if (fs.existsSync(indexPath)) {
                    // Use trailing slash for directory URLs (Next.js static export convention)
                    urls.push(urlPath + '/');
                }
                walk(fullPath, urlPath + '/');
            }
            // Note: we only add directories with index.html, not standalone files
            // (except for special files like feed.xml, robots.txt handled separately)
        }
    }

    walk(dir, basePath);
    return urls;
}

function pageInfo(url) {
    const cleanUrl = url.replace(/"/g, '&quot;');

    if (url === `${SITE_URL}/`) {
        return { changefreq: 'daily', priority: '1.0' };
    }
    if (url.includes('/services/stage/')) {
        return { changefreq: 'weekly', priority: '0.7' };
    }
    if (url.includes('/services/')) {
        return { changefreq: 'weekly', priority: '0.6' };
    }
    if (url.includes('/blog/')) {
        return { changefreq: 'weekly', priority: '0.5' };
    }
    if (['/ai/', '/ai-services/', '/ai-automation/', '/industry-solutions/', '/industries/',
         '/solutions/', '/products/', '/tools/', '/configurator/',
         '/agents-monitoring/'].some(x => url.startsWith(SITE_URL + x))) {
        return { changefreq: 'weekly', priority: '0.5' };
    }
    return { changefreq: 'monthly', priority: '0.4' };
}

function main() {
    // Collect all HTML pages from public/
    const pages = collectUrls(PUBLIC_DIR, '/');

    // Deduplicate
    const uniquePages = [...new Set(pages)];
    console.log(`Collected ${uniquePages.length} unique pages from public/`);

    // Build sitemap
    const rows = uniquePages.map(url => {
        const fullUrl = url === '/' ? SITE_URL + '/' : SITE_URL + url;
        const info = pageInfo(fullUrl);
        return `  <url>\n    <loc>${fullUrl}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${info.changefreq}</changefreq>\n    <priority>${info.priority}</priority>\n  </url>`;
    });

    const sitemap = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...rows,
        '</urlset>',
    ].join('\n');

    fs.writeFileSync(SITEMAP_FILE, sitemap + '\n');
    console.log(`sitemap.xml: ${uniquePages.length} URLs written to ${SITEMAP_FILE}`);
}

main();
